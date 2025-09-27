// Firebase環境変数をテスト用に設定
process.env.NODE_ENV = 'test';
process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099';
process.env.FIREBASE_PROJECT_ID = 'demo-test-project';

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/core/prisma/prisma.service';

describe('GraphQL API (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = app.get<PrismaService>(PrismaService);

    await app.init();
  });

  afterAll(async () => {
    await prisma.reaction.deleteMany();
    await prisma.privateNote.deleteMany();
    await prisma.postEmotion.deleteMany();
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
    await app.close();
  });

  beforeEach(async () => {
    // テスト前にデータをクリア
    await prisma.reaction.deleteMany();
    await prisma.privateNote.deleteMany();
    await prisma.postEmotion.deleteMany();
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
  });

  describe('Hello Query', () => {
    it('Helloメッセージが返ること', () => {
      const query = `
        query {
          hello
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.hello).toBe('Hello GraphQL World!');
        });
    });
  });

  describe('Public Queries (認証不要)', () => {
    beforeEach(async () => {
      // テストデータ作成
      const user = await prisma.user.create({
        data: {
          firebaseUid: 'test-user-1',
          nickname: 'Test User',
        },
      });

      await prisma.post.create({
        data: {
          id: 'test-post-1',
          whatPerson: '友達',
          thoughts: 'テスト投稿です',
          authorId: user.id,
        },
      });
    });

    it('認証なしでフィードが取得できること', () => {
      const query = `
        query {
          feed(first: 10) {
            edges {
              node {
                id
                whatPerson
                thoughts
                emotions
                reactionCount
                hasUserReacted
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.feed.edges).toHaveLength(1);
          expect(res.body.data.feed.edges[0].node.whatPerson).toBe('友達');
          expect(res.body.data.feed.edges[0].node.thoughts).toBe(
            'テスト投稿です',
          );
        });
    });

    it('フィードのページネーションが処理できること', () => {
      const query = `
        query {
          feed(first: 1) {
            edges {
              node {
                id
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.feed.pageInfo.hasNextPage).toBe(false);
        });
    });
  });

  describe('Protected Queries (認証必要)', () => {
    let testUserId: string;

    beforeEach(async () => {
      const user = await prisma.user.create({
        data: {
          firebaseUid: 'dev-user-1',
          nickname: 'Dev User',
        },
      });
      testUserId = user.id;

      await prisma.post.create({
        data: {
          id: 'my-post-1',
          whatPerson: '家族',
          thoughts: 'テスト投稿',
          authorId: testUserId,
        },
      });
    });

    it('有効なトークンでユーザー情報が返ること', () => {
      const query = `
        query {
          me {
            id
            ordinal
            nickname
            createdAt
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .set('Authorization', 'Bearer dev-token')
        .send({ query })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.me.nickname).toBe('Dev User');
          expect(res.body.data.me.ordinal).toBeGreaterThan(0);
        });
    });

    it('未認証リクエストが拒否されること', () => {
      const query = `
        query {
          me {
            id
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect((res) => {
          expect(res.body.errors).toBeDefined();
          expect(res.body.errors[0].message).toContain('認証が必要です');
        });
    });

    it('ユーザーの投稿一覧が取得できること', () => {
      const query = `
        query {
          myPosts(first: 10) {
            edges {
              node {
                id
                whatPerson
                thoughts
                emotions
              }
            }
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .set('Authorization', 'Bearer dev-token')
        .send({ query })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.myPosts.edges).toHaveLength(1);
          expect(res.body.data.myPosts.edges[0].node.whatPerson).toBe('家族');
        });
    });

    it('ユーザーのリアクション一覧が取得できること', async () => {
      // まずリアクションを作成
      await prisma.reaction.create({
        data: {
          id: 'test-reaction-1',
          postId: 'my-post-1',
          userId: testUserId,
          type: 'like',
        },
      });

      const query = `
        query {
          myReactions(first: 10) {
            edges {
              node {
                id
                type
                createdAt
              }
            }
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .set('Authorization', 'Bearer dev-token')
        .send({ query })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.myReactions.edges).toHaveLength(1);
          expect(res.body.data.myReactions.edges[0].node.type).toBe('like');
        });
    });
  });

  describe('Mutations', () => {
    let testUserId: string;

    beforeEach(async () => {
      const user = await prisma.user.create({
        data: {
          firebaseUid: 'dev-user-1',
          nickname: 'Dev User',
        },
      });
      testUserId = user.id;
    });

    it('新しい投稿が作成できること', () => {
      const mutation = `
        mutation {
          createPost(input: {
            whatPerson: "同僚"
            thoughts: "プロジェクト完了しました"
            emotions: ["happy"]
          }) {
            id
            whatPerson
            thoughts
            emotions
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .set('Authorization', 'Bearer dev-token')
        .send({ query: mutation })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.createPost.whatPerson).toBe('同僚');
          expect(res.body.data.createPost.thoughts).toBe(
            'プロジェクト完了しました',
          );
          expect(res.body.data.createPost.emotions).toContain('happy');
        });
    });

    it('ユーザーのニックネームが設定できること', () => {
      const mutation = `
        mutation {
          setNickname(input: {
            nickname: "新しいニックネーム"
          }) {
            id
            nickname
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .set('Authorization', 'Bearer dev-token')
        .send({ query: mutation })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.setNickname.nickname).toBe('新しいニックネーム');
        });
    });

    it('リアクションが作成できること', async () => {
      const post = await prisma.post.create({
        data: {
          id: 'reaction-post-1',
          whatPerson: '友達',
          thoughts: 'リアクションテスト',
          authorId: testUserId,
        },
      });

      const mutation = `
        mutation {
          react(input: {
            postId: "${post.id}"
            type: "like"
          }) {
            id
            type
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .set('Authorization', 'Bearer dev-token')
        .send({ query: mutation })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.react.type).toBe('like');
        });
    });

    it('プライベートノートが追加できること', async () => {
      const post = await prisma.post.create({
        data: {
          id: 'note-post-1',
          whatPerson: '友達',
          thoughts: 'ノートテスト',
          authorId: testUserId,
        },
      });

      const mutation = `
        mutation {
          addNote(input: {
            postId: "${post.id}"
            body: "これは私だけのメモです"
          }) {
            id
            body
            post {
              whatPerson
            }
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .set('Authorization', 'Bearer dev-token')
        .send({ query: mutation })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.addNote.body).toBe('これは私だけのメモです');
          expect(res.body.data.addNote.post.whatPerson).toBe('友達');
        });
    });
  });

  describe('Error Handling', () => {
    it('無効なクエリがエラーとなること', () => {
      const query = `
        query {
          invalidField
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(400);
    });

    it('認証なしのMutationが拒否されること', () => {
      const mutation = `
        mutation {
          createPost(input: {
            whatPerson: "テスト"
            thoughts: "認証なし"
            emotions: ["sad"]
          }) {
            id
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query: mutation })
        .expect(200)
        .expect((res) => {
          expect(res.body.errors).toBeDefined();
          expect(res.body.errors[0].message).toContain('認証が必要です');
        });
    });

    it('無効な感情コードでエラーが発生すること', () => {
      const mutation = `
        mutation {
          createPost(input: {
            whatPerson: "テスト"
            thoughts: "無効な感情"
            emotions: ["invalid_emotion"]
          }) {
            id
          }
        }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
        .set('Authorization', 'Bearer dev-token')
        .send({ query: mutation })
        .expect(200)
        .expect((res) => {
          // バリデーションエラーが発生することを期待
          expect(res.body.errors).toBeDefined();
        });
    });
  });
});
