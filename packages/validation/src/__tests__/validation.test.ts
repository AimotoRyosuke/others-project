import { createPostSchema, nicknameSchema, emotionCodes } from '../index';

describe('@others/validation', () => {
  describe('createPostSchema', () => {
    it('有効な投稿データをバリデーションできること', () => {
      const validPostData = {
        whatPerson: '友達との楽しい時間',
        emotions: ['happy', 'fun'],
        thoughts: '今日は本当に楽しい一日でした',
      };

      const result = createPostSchema.safeParse(validPostData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validPostData);
      }
    });

    it('必須フィールドがない場合はエラーが返されること', () => {
      const invalidPostData = {
        emotions: ['happy'],
      };

      const result = createPostSchema.safeParse(invalidPostData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(
          result.error.issues.some((issue) => issue.path.includes('whatPerson'))
        ).toBe(true);
      }
    });

    it('無効な感情コードの場合はエラーが返されること', () => {
      const invalidPostData = {
        whatPerson: '友達との時間',
        emotions: ['invalid_emotion'],
      };

      const result = createPostSchema.safeParse(invalidPostData);
      expect(result.success).toBe(false);
    });

    it('空の感情配列の場合はエラーが返されること', () => {
      const invalidPostData = {
        whatPerson: '友達との時間',
        emotions: [],
      };

      const result = createPostSchema.safeParse(invalidPostData);
      expect(result.success).toBe(false);
    });

    it('whatPersonが短すぎる場合はエラーが返されること', () => {
      const invalidPostData = {
        whatPerson: 'ab', // 3文字未満
        emotions: ['happy'],
      };

      const result = createPostSchema.safeParse(invalidPostData);
      expect(result.success).toBe(false);
    });

    it('URLを含む場合はエラーが返されること', () => {
      const invalidPostData = {
        whatPerson: '友達とhttps://example.comを見た',
        emotions: ['happy'],
      };

      const result = createPostSchema.safeParse(invalidPostData);
      expect(result.success).toBe(false);
    });
  });

  describe('nicknameSchema', () => {
    it('有効なニックネームをバリデーションできること', () => {
      const validNickname = 'testuser123';

      const result = nicknameSchema.safeParse(validNickname);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toBe('testuser123');
      }
    });

    it('空文字のニックネームはエラーが返されること', () => {
      const result = nicknameSchema.safeParse('');
      expect(result.success).toBe(false);
    });

    it('短すぎるニックネームはエラーが返されること', () => {
      const result = nicknameSchema.safeParse('ab');
      expect(result.success).toBe(false);
    });

    it('長すぎるニックネームはエラーが返されること', () => {
      const longNickname = 'a'.repeat(25); // 20文字を超える
      const result = nicknameSchema.safeParse(longNickname);
      expect(result.success).toBe(false);
    });

    it('大文字で始まるニックネームはエラーが返されること', () => {
      const result = nicknameSchema.safeParse('TestUser');
      expect(result.success).toBe(false);
    });

    it('無効な文字を含む場合はエラーが返されること', () => {
      const result = nicknameSchema.safeParse('test@user');
      expect(result.success).toBe(false);
    });
  });

  describe('emotionCodes', () => {
    it('定義された感情コードが正しく存在すること', () => {
      expect(emotionCodes).toContain('happy');
      expect(emotionCodes).toContain('sad');
      expect(emotionCodes).toContain('lonely');
      expect(emotionCodes).toContain('fun');
      expect(emotionCodes).toContain('angry');
      expect(emotionCodes).toContain('scary');
      expect(emotionCodes).toContain('amazing');
    });

    it('感情コードが7つ存在すること', () => {
      expect(emotionCodes).toHaveLength(7);
    });
  });
});
