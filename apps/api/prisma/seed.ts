import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 「他人」アプリのシードデータを投入中...');

  // 感情データの作成
  const emotions = [
    { code: 'happy', label: '嬉しい' },
    { code: 'sad', label: '悲しい' },
    { code: 'lonely', label: '寂しい' },
    { code: 'fun', label: '楽しい' },
    { code: 'angry', label: '怒り' },
    { code: 'scary', label: '怖い' },
    { code: 'amazing', label: 'すごい' },
  ];

  for (const emotion of emotions) {
    await prisma.emotion.upsert({
      where: { code: emotion.code },
      update: { label: emotion.label },
      create: emotion,
    });
  }

  // テストユーザーの作成
  const user1 = await prisma.user.upsert({
    where: { firebaseUid: 'test-firebase-uid-1' },
    update: {},
    create: {
      firebaseUid: 'test-firebase-uid-1',
      nickname: 'anonymous1',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { firebaseUid: 'test-firebase-uid-2' },
    update: {},
    create: {
      firebaseUid: 'test-firebase-uid-2',
      nickname: 'test_user',
    },
  });

  await prisma.user.upsert({
    where: { firebaseUid: 'test-firebase-uid-3' },
    update: {},
    create: {
      firebaseUid: 'test-firebase-uid-3',
      nickname: null, // 未設定ユーザー
    },
  });

  // 感情を取得
  const happyEmotion = await prisma.emotion.findUniqueOrThrow({
    where: { code: 'happy' },
  });
  const funEmotion = await prisma.emotion.findUniqueOrThrow({
    where: { code: 'fun' },
  });
  const sadEmotion = await prisma.emotion.findUniqueOrThrow({
    where: { code: 'sad' },
  });
  const lonelyEmotion = await prisma.emotion.findUniqueOrThrow({
    where: { code: 'lonely' },
  });

  // テスト投稿の作成
  const post1 = await prisma.post.create({
    data: {
      authorId: user1.id,
      whatPerson: '電車で隣に座った人が、本をとても集中して読んでいた',
      thoughts: '自分も集中して何かに取り組みたいなと思った',
    },
  });

  // 投稿と感情の関連付け
  await prisma.postEmotion.createMany({
    data: [
      { postId: post1.id, emotionId: happyEmotion.id },
      { postId: post1.id, emotionId: funEmotion.id },
    ],
  });

  const post2 = await prisma.post.create({
    data: {
      authorId: user2.id,
      whatPerson: 'カフェで一人で勉強している学生さん',
      thoughts: null,
    },
  });

  await prisma.postEmotion.create({
    data: { postId: post2.id, emotionId: sadEmotion.id },
  });

  const post3 = await prisma.post.create({
    data: {
      authorId: user1.id,
      whatPerson: 'バス停で雨宿りしている人たち',
      thoughts: 'みんな知らない人同士だけど、なんとなく一体感があった',
    },
  });

  await prisma.postEmotion.createMany({
    data: [
      { postId: post3.id, emotionId: lonelyEmotion.id },
      { postId: post3.id, emotionId: happyEmotion.id },
    ],
  });

  // テストリアクション
  await prisma.reaction.create({
    data: {
      postId: post1.id,
      userId: user2.id,
      type: 'like',
    },
  });

  // テストプライベートメモ
  await prisma.privateNote.create({
    data: {
      postId: post1.id,
      userId: user2.id,
      body: 'この投稿を見て、自分も読書習慣をつけたいと思った',
    },
  });

  console.log('✅ シードデータの投入が完了しました！');
  console.log('📊 作成されたデータ:');
  console.log(`  - 感情: ${emotions.length}件`);
  console.log('  - ユーザー: 3名');
  console.log('  - 投稿: 3件');
  console.log('  - リアクション: 1件');
  console.log('  - プライベートメモ: 1件');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
