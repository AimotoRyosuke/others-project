# @others/validation

Zodベースのバリデーションスキーマパッケージです。

## 📖 概要

このパッケージは、Others Projectの全アプリケーション間で共有されるZodバリデーションスキーマを提供します。

## 🚀 使用方法

```typescript
import { postSchema, userSchema } from '@others/validation';

// 投稿データのバリデーション
const postData = {
  content: 'Hello World',
  emotion: 'happy',
};

const validatedPost = postSchema.parse(postData);

// ユーザーデータのバリデーション
const userData = {
  username: 'john_doe',
  displayName: 'John Doe',
};

const validatedUser = userSchema.parse(userData);
```

## 🛠️ 開発

### ビルド

```bash
npm run build
```

### 型チェック

```bash
npm run type-check
```

### リント

```bash
npm run lint
```

### 開発モード（ウォッチ）

```bash
npm run dev
```

## 📦 依存関係

- Zod - スキーマ検証ライブラリ
- @others/types - 共有型定義

## 🔍 スキーマ

### postSchema

投稿データのバリデーションスキーマ

- `content`: 3文字以上500文字以内、URL・メール・電話番号禁止
- `emotion`: 感情タイプの選択（必須）

### userSchema

ユーザーデータのバリデーションスキーマ

- `username`: 3文字以上20文字以内、英小文字開始、英数字とアンダースコア・ドット・ハイフンのみ
- `displayName`: 表示名（任意）

### その他

今後追加予定のスキーマ定義
