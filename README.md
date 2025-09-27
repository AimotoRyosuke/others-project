# Others Project Monorepo

他人アプリケーションのmonorepo構成プロジェクトです。

## 🏗️ プロジェクト構成

このプロジェクトは、Yarn Workspaces + Turborepoを使用したmonorepo構成で、複数のアプリケーショ## 🔧 開発ガイドライン

### 新しいパッケージの追加

新しい共有パッケージを追加する場合：

1. `packages/` ディレクトリに新しいフォルダを作成
2. `@others/` スコープでパッケージ名を設定
3. `tsconfig.base.json` にパスマッピングを追加
4. 他のアプリケーションで `workspace:*` として依存関係を追加

### 依存関係の管理

```bash
# ルートに共通依存関係を追加
yarn add -D typescript eslint prettier

# 特定のワークスペースに依存関係を追加
yarn workspace @others/web add vite
yarn workspace @others/api add @nestjs/common

# ワークスペース間の依存関係
yarn workspace @others/web add @others/types@workspace:*
```

### コーディング規約

- ESLint と Prettier の設定に従う
- **JavaScript ファイルは禁止** - TypeScript のみ使用
- コミット前に `yarn lint` と `yarn format` を実行
- TypeScript の strict モードを使用

### Yarn Workspaces の特徴

- 共通依存関係はルートで一元管理
- `workspace:*` プロトコルでワークスペース間参照
- ホイスティングによる効率的な依存関係管理
- Turborepo と組み合わせた高速ビルド・テストます。

### 📱 アプリケーション (`apps/`)

- **`@others/web`** - Vite + React 19ベースのWebアプリケーション
- **`@others/api`** - NestJSベースのAPIサーバー
- **`@others/mobile`** - React Native（Expo）ベースのモバイルアプリ

### 📦 共有パッケージ (`packages/`)

- **`@others/types`** - TypeScript型定義の共有パッケージ
- **`@others/design-tokens`** - デザイントークン定義（色、フォント、スペーシングなど）
- **`@others/validation`** - Zodベースのバリデーションスキーマ

## 🚀 クイックスタート

### 必要な環境

- Node.js 18以上
- Yarn 4以上（推奨）
- Docker & Docker Compose（Dockerを使用する場合）

### ローカル開発

#### 1. 通常のインストール・起動

```bash
# Yarn Workspacesを使用
yarn install

# 全アプリケーションの開発サーバーを並列起動
yarn dev
```

#### 2. Docker環境での起動

```bash
# 開発環境での起動（ホットリロード対応）
./start.sh dev
# または
docker compose -f docker-compose.dev.yml up --build

# 初回起動後、データベースのセットアップ
./setup-db.sh

# 本番環境での起動（TODO: 未実装）
# ./start.sh prod
```

**Prismaデータベース管理:**
```bash
# スキーマの適用
yarn workspace @others/api db:push

# マイグレーションの作成・実行
yarn workspace @others/api db:migrate

# シードデータの投入
yarn workspace @others/api db:seed

# Prisma Studio（データベース管理GUI）
yarn workspace @others/api db:studio
```

**Docker開発環境でのポート:**

- Web (Vite+React): http://localhost:3008
- API (NestJS): http://localhost:4008  
- Database (PostgreSQL): localhost:5438

**データベース接続情報:**
- Host: localhost
- Port: 5438
- Database: othersdb
- User: postgres
- Password: password

### ビルド

```bash
# 全パッケージをビルド
yarn build
```

## 📋 利用可能なスクリプト

### 全プロジェクト実行（Turbo使用）

| スクリプト              | 説明                             |
| ----------------------- | -------------------------------- |
| `yarn dev`              | 全アプリの開発サーバーを起動     |
| `yarn build`            | 全パッケージをビルド             |
| `yarn lint`             | ESLintによるコード品質チェック   |
| `yarn test`             | テストの実行                     |
| `yarn type-check`       | TypeScriptの型チェック           |
| `yarn format`           | Prettierによるコードフォーマット |
| `yarn clean`            | ビルドファイルのクリーンアップ   |

### 個別プロジェクト実行

```bash
# Webアプリケーション
yarn workspace @others/web run dev
yarn workspace @others/web run build
yarn workspace @others/web run type-check

# APIサーバー
yarn workspace @others/api run dev
yarn workspace @others/api run test
yarn workspace @others/api run build

# モバイルアプリ
yarn workspace @others/mobile run dev
yarn workspace @others/mobile run start
```

### フィルター実行（Turbo）

```bash
# 特定のワークスペースのみでビルド
yarn turbo run build --filter=@others/web
yarn turbo run test --filter=@others/api

# 依存関係を含めて実行
yarn turbo run build --filter=@others/web...
```

## 🛠️ 技術スタック

### フロントエンド

- **Vite** (高速ビルドツール)
- **React 19**
- **TypeScript 5**

### バックエンド

- **NestJS 11**
- **Prisma** - データベースORM
- **PostgreSQL 17**
- **Firebase Admin**
- **TypeScript 5**

### モバイル

- **React Native**
- **Expo**
- **TypeScript 5**

### 開発ツール

- **Yarn Workspaces** - パッケージ管理・依存関係管理
- **Turborepo** - モノレポタスク実行・キャッシュ
- **ESLint** - コード品質・JavaScript禁止設定
- **Prettier** - コードフォーマット
- **TypeScript** - 型安全性（JavaScript禁止）

## 📁 ディレクトリ構造

```text
others-project/
├── apps/
│   ├── api/          # NestJS APIサーバー
│   ├── mobile/       # React Native モバイルアプリ
│   └── web/          # Vite+React Webアプリ
├── packages/
│   ├── types/        # 共有型定義
│   ├── ui/           # UI コンポーネント
│   └── validation/   # バリデーションスキーマ
├── .yarn/            # Yarn キャッシュ（Git除外）
├── .yarnrc.yml       # Yarn設定
├── package.json      # ルート設定・Workspaces定義
├── yarn.lock         # 依存関係ロック
├── turbo.json        # Turborepo設定
├── tsconfig.base.json # TypeScript基本設定
└── README.md
```

## 🔧 開発ガイドライン

### パッケージの追加

新しい共有パッケージを追加する場合：

1. `packages/` ディレクトリに新しいフォルダを作成
2. `@others/` スコープでパッケージ名を設定
3. `tsconfig.base.json` にパスマッピングを追加
4. 必要に応じて他のアプリケーションで依存関係を追加

### コードスタイル

- ESLint と Prettier の設定に従う
- コミット前に `yarn lint` と `yarn format` を実行
- TypeScript の strict モードを使用

## 📄 ライセンス

非公開プロジェクト
