# @others/types

共有TypeScript型定義パッケージです。

## 📖 概要

このパッケージは、Others Projectの全アプリケーション間で共有される型定義を提供します。

## 🚀 使用方法

```typescript
import { EmotionType, Post, User } from '@others/types';

const emotion: EmotionType = 'happy';
const post: Post = {
  id: '1',
  content: 'Hello World',
  emotion: emotion,
  userId: 'user1',
};
```

## 📁 構造

- `domain.ts` - ドメインモデルの型定義
- `graphql.ts` - GraphQL関連の型定義
- `index.ts` - エクスポート定義

## 🛠️ 開発

### ビルド

```bash
yarn build
```

### 型チェック

```bash
yarn type-check
```

### リント

```bash
yarn lint
```

### 開発モード（ウォッチ）

```bash
yarn dev
```

## 📦 エクスポート

### EmotionType

感情タイプの列挙型

### Post

投稿データの型定義

### User

ユーザーデータの型定義

### その他

GraphQL関連の型定義など
