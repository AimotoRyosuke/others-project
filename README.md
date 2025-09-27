# Others Project

> 他人の感情を理解し、つながりを深めるプラットフォーム

## � 概要

Others Projectは、日常の出来事を通じて他人の感情を理解し、共感を育むソーシャルプラットフォームです。
Yarn Workspaces + Turborepoを使用したmonorepo構成で、Web・Mobile・APIが統合された開発環境を提供します。

### 🎯 主な機能

- 📝 日常の体験投稿・共有
- 💭 感情分析・可視化
- 🤝 共感・つながり機能
- 📊 感情の統計・分析

## 🏗️ アーキテクチャ

### 📱 アプリケーション (`apps/`)

| パッケージ       | 技術スタック                    | 役割                |
| ---------------- | ------------------------------- | ------------------- |
| `@others/web`    | Vite + React 19                 | Webアプリケーション |
| `@others/api`    | NestJS 11 + Prisma + PostgreSQL | GraphQL APIサーバー |
| `@others/mobile` | React Native + Expo             | モバイルアプリ      |

### 📦 共有ライブラリ (`packages/`)

| パッケージ               | 役割                | 主要技術                     |
| ------------------------ | ------------------- | ---------------------------- |
| `@others/types`          | TypeScript型定義    | GraphQL、ドメイン型          |
| `@others/validation`     | データ検証          | Zod                          |
| `@others/design-tokens`  | デザインシステム    | 色、フォント、スペーシング   |
| `@others/ui`             | UIコンポーネント    | React/React Native           |
| `@others/graphql-client` | GraphQLクライアント | Apollo Client                |
| `@others/utils`          | ユーティリティ      | 共通関数・ヘルパー           |
| `@others/config`         | 開発設定            | ESLint、Prettier、TypeScript |

## 🛠️ 開発ルール

> **重要**: 開発前に必ず [`DEVELOPMENT_RULES.md`](./DEVELOPMENT_RULES.md) を確認してください

### 必須ルール

1. **共通化の徹底**: 2つ以上のアプリで使用されるコードは `packages/` に配置
2. **テスト実装**: 全機能にテスト実装必須（カバレッジ: packages 80%以上、apps 70%以上、api 85%以上）
3. **Storybookでのコンポーネント管理**: 再利用可能なUIコンポーネントは必ずStorybook対応
4. **開発完了チェック**: `yarn test && yarn lint && yarn type-check && yarn build` を必ず実行

## 🚀 セットアップ

### 必要環境

- **Node.js**: 18以上
- **Yarn**: 4以上（推奨）
- **Docker**: 開発環境用（オプション）

### クイックスタート

#### 方法1: ローカル開発

```bash
# 1. 依存関係のインストール
yarn install

# 2. 開発サーバーの起動
yarn dev

# 3. データベースセットアップ（初回のみ）
yarn workspace @others/api db:push
yarn workspace @others/api db:seed
```

#### 方法2: Docker開発環境

```bash
# 1. Docker環境起動（ホットリロード対応）
./start.sh dev

# 2. データベースセットアップ（初回のみ）
./setup-db.sh
```

### アクセスURL

| サービス      | URL                     | 説明                   |
| ------------- | ----------------------- | ---------------------- |
| Web           | <http://localhost:3008> | Reactアプリケーション  |
| API           | <http://localhost:4008> | GraphQL Playground     |
| Database      | `localhost:5438`        | PostgreSQL (docker)    |
| Firebase UI   | <http://localhost:6008> | Firebase Emulator UI   |
| Firebase Auth | `localhost:7008`        | Firebase Auth Emulator |

### データベース管理

```bash
# スキーマ適用
yarn workspace @others/api db:push

# シードデータ投入
yarn workspace @others/api db:seed

# Prisma Studio起動
yarn workspace @others/api db:studio
```

### 認証設定（開発環境）

開発環境では **Firebase Auth Emulator** を使用します：

#### 開発用認証トークン

APIでは開発時に `dev-token` という固定トークンを使用できます：

```bash
# GraphQL Playground での認証ヘッダー例
{
  "Authorization": "Bearer dev-token"
}
```

#### Firebase Emulator利用

1. **エミュレーター起動** (Firebase CLIは開発用依存関係に含まれています):

   ```bash
   # Auth Emulatorのみ
   yarn firebase:emulators

   # Auth + UI Emulatorの両方
   yarn firebase:emulators:ui
   ```

2. **エミュレーターUI**: <http://localhost:6008> でユーザー管理

3. **認証が必要なAPI**:
   - `me` - ユーザー情報取得
   - `myPosts` - 自分の投稿一覧
   - `myReactions` - 自分のリアクション一覧
   - 投稿の作成・更新・削除
   - リアクション作成・削除
   - プライベートノート作成・更新・削除

## 🧪 開発コマンド

### 基本コマンド

```bash
# 開発サーバー起動
yarn dev

# Firebase Emulator付きで開発サーバー起動
yarn dev:with-emulators

# Firebase Emulatorのみ起動
yarn firebase:emulators

# 全体ビルド
yarn build

# テスト実行
yarn test

# 品質チェック
yarn lint              # ESLint
yarn type-check        # TypeScript
yarn format           # Prettier
```

### 個別実行例

```bash
# 特定パッケージでの実行
yarn workspace @others/web dev
yarn workspace @others/api test

# Turborepoフィルター実行
yarn turbo run build --filter=@others/web...
yarn turbo run test --filter=@others/api
```

### 依存関係管理

```bash
# パッケージ追加
yarn workspace @others/web add react-router-dom
yarn workspace @others/api add @nestjs/jwt

# ワークスペース間依存
yarn workspace @others/web add @others/types@workspace:*
```

## 🛠️ 技術スタック

| カテゴリ   | 技術                                         |
| ---------- | -------------------------------------------- |
| **Web**    | Vite, React 19, TypeScript 5                 |
| **API**    | NestJS 11, Prisma, PostgreSQL 17, GraphQL    |
| **Mobile** | React Native, Expo                           |
| **認証**   | Firebase Admin SDK                           |
| **開発**   | Yarn Workspaces, Turborepo, ESLint, Prettier |
| **テスト** | Jest, React Testing Library, Playwright      |

## � ディレクトリ構造

```text
others-project/
├── apps/                    # アプリケーション層
│   ├── web/                # Webアプリ (Vite + React)
│   ├── api/                # APIサーバー (NestJS)
│   └── mobile/             # モバイルアプリ (React Native)
├── packages/               # 共有ライブラリ層
│   ├── types/              # 型定義
│   ├── validation/         # バリデーション
│   ├── design-tokens/      # デザインシステム
│   ├── ui/                 # UIコンポーネント
│   ├── graphql-client/     # GraphQLクライアント
│   ├── utils/              # ユーティリティ
│   └── config/             # 開発設定
└── 設定ファイル群
    ├── turbo.json          # Turborepo設定
    ├── tsconfig.base.json  # TypeScript基本設定
    └── package.json        # Workspaces定義
```

## 📄 ライセンス

非公開プロジェクト - 無断複製・配布を禁止します。
