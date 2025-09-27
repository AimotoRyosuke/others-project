# @others/api

NestJS 11ベースのAPIサーバーです。

## 📖 概要

Others ProjectのバックエンドAPIサーバーです。NestJS 11を使用して構築されており、Firebase Adminによる認証機能を提供します。

## 🚀 開発

### 開発サーバーの起動

```bash
yarn dev
```

### ビルド

```bash
yarn build
```

### プロダクション起動

```bash
yarn start:prod
```

### テスト

```bash
# 単体テスト
yarn test

# E2Eテスト
yarn test:e2e

# テストカバレッジ
yarn test:cov
```

### リント

```bash
yarn lint
```

### 型チェック

```bash
yarn type-check
```

## 🛠️ 技術スタック

- **NestJS 11** - Node.jsフレームワーク
- **TypeScript 5** - 型安全性
- **GraphQL** - API クエリ言語とランタイム
- **Prisma** - データベースORM
- **Firebase Admin** - 認証
- **@others/types** - 共有型定義パッケージ
- **@others/validation** - Zodベースバリデーション（直接使用）

## 📁 構造

```text
src/
├── app.controller.ts       # ヘルスチェック
├── app.module.ts          # ルートモジュール
├── main.ts               # エントリーポイント
├── config/
│   └── graphql.config.ts  # GraphQL設定
├── core/
│   ├── auth/             # Firebase認証
│   ├── common/           # 共通例外
│   ├── graphql/          # GraphQLエンティティ・入力型
│   └── prisma/           # データベース接続
└── features/             # 機能別モジュール
    ├── posts/            # 投稿機能
    ├── users/            # ユーザー機能
    └── notes/            # ノート機能
```

## ✅ バリデーション

データバリデーションには`@others/validation`パッケージを直接使用しています。
Zodスキーマベースの型安全なバリデーションとテキストポリシーチェックを提供します。

### 使用方法

```typescript
import {
  createPostSchema,
  assertTextPolicy,
  emotionCodes,
} from '@others/validation';

// Zodスキーマバリデーション
const result = createPostSchema.safeParse(input);
if (!result.success) {
  throw new ValidationError(result.error.message);
}

// ポリシーチェック（URL、メール、電話番号の禁止）
assertTextPolicy(input.whatPerson);
assertTextPolicy(input.thoughts);

// 感情コードの使用
console.log('利用可能な感情:', emotionCodes); // ['happy', 'sad', 'lonely', ...]
```

### 共有パッケージとの統合

APIは以下の共有パッケージを使用して重複を避けています：

- **@others/types**: GraphQL型定義とビジネスロジック型
- **@others/validation**: バリデーションスキーマと共通関数
- **@others/graphql-client**: GraphQLクエリとクライアント設定（型生成用）

## 🔐 認証

Firebase Adminを使用したJWT認証を実装しています。

### 環境変数

以下の環境変数が必要です：

```bash
# データベース
DATABASE_URL="postgresql://username:password@localhost:5432/others?schema=public"

# Firebase設定
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your-client-email

# Firebase Emulator（開発環境）
FIREBASE_AUTH_EMULATOR_HOST=127.0.0.1:9099
```

## 📡 GraphQL API

GraphQLエンドポイント: `/graphql`

### 主要な操作

#### クエリ

- `me` - 現在のユーザー情報取得
- `feed` - 投稿フィード取得（ページネーション対応）
- `myPosts` - 自分の投稿一覧取得
- `myReactions` - 自分がリアクションした投稿一覧取得

#### ミューテーション

- `createPost` - 投稿作成
- `deletePost` - 投稿削除
- `setNickname` - ニックネーム設定
- `addReaction` - 投稿にリアクション追加
- `addNote` - プライベートノート追加

### GraphQL Playground

開発環境では `/graphql` にアクセスしてGraphQL Playgroundを使用できます。

### GraphQLスキーマ更新

リゾルバー変更後は以下の手順でスキーマを更新してください：

```bash
# 1. Prismaクライアント生成
yarn db:generate

# 2. API再起動（スキーマ自動生成）
yarn dev

# 3. GraphQLクライアント更新
yarn workspace @others/graphql-client build
```

## 🧪 テスト

Jestを使用したテストスイートが設定されています。現在のカバレッジ: **95.4%**

```bash
# 全テスト実行
yarn test

# ウォッチモード
yarn test:watch

# デバッグモード
yarn test:debug

# カバレッジ確認
yarn test:cov
```

### テスト要件

- **カバレッジ要件**: 85%以上
- **テストケース名**: 日本語の連体形（「～すること」「～できること」）
- **対象**: 単体テスト、統合テスト、E2Eテスト

---

## NestJSについて

このプロジェクトは[Nest](https://github.com/nestjs/nest) フレームワークのTypeScriptスターターリポジトリをベースにしています。

### NestJSの詳細情報

- [NestJS Documentation](https://docs.nestjs.com) - フレームワークについて詳しく学ぶ
- [Discord channel](https://discord.gg/G7Qnnhy) - 質問とサポート
- [公式ビデオコース](https://courses.nestjs.com/) - より実践的な経験を積む
- [NestJS Devtools](https://devtools.nestjs.com) - アプリケーショングラフの可視化

### サポート

Nestは MIT ライセンスのオープンソースプロジェクトです。スポンサーとサポーターの支援により成長を続けています。

### ライセンス

Nest は [MIT ライセンス](https://github.com/nestjs/nest/blob/master/LICENSE) です。
