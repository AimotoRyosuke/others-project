# Others Project - アーキテクチャ構成書

> このドキュメントは、プロジェクトの技術的な構成と再現方法をまとめたものです。

## 📋 プロジェクト概要

**アーキテクチャ**: モノレポ (Yarn Workspaces + Turborepo)  
**パッケージマネージャー**: Yarn v4.10.3  
**Node.js**: >=18.0.0  
**TypeScript**: 5.7.3

## 🏗️ モノレポ構成

```
others-project/
├── apps/
│   ├── api/          # NestJS + GraphQL + Prisma
│   ├── web/          # React + Vite
│   └── mobile/       # React Native + Expo
├── packages/
│   ├── config/       # 共通設定（ESLint、Prettier、TypeScript）
│   ├── design-tokens/# デザインシステム（色、フォント等）
│   ├── graphql-client/# Apollo Client設定
│   ├── types/        # 共通型定義
│   ├── ui/           # 共通UIコンポーネント
│   ├── utils/        # ユーティリティ関数
│   └── validation/   # Zodスキーマ
└── scripts/          # ビルドスクリプト
```

## 🛠️ 技術スタック

### Backend (API)

- **フレームワーク**: NestJS 11.0.1
- **GraphQL**: Apollo Server 4.11.3 + @nestjs/graphql
- **データベース**: PostgreSQL + Prisma 6.16.2
- **認証**: Firebase Admin SDK
- **バリデーション**: class-validator + class-transformer

### Frontend (Web)

- **フレームワーク**: React 19.1.1
- **ビルドツール**: Vite 6.0.7
- **開発サーバー**: Vite Dev Server (Port: 3000)

### Mobile

- **フレームワーク**: React Native 0.81.4 + Expo 54.0.10
- **アーキテクチャ**: Expo New Architecture有効

### 共通パッケージ

- **型安全性**: TypeScript 5.7.3
- **GraphQL Client**: Apollo Client 3.8.0
- **バリデーション**: Zod (latest)
- **テスト**: Jest 30.0.0
- **UI Components**: React/React Native対応

## 🔧 開発環境

### モノレポ管理

- **Turborepo**: タスク実行とキャッシュ管理
- **Yarn Workspaces**: 依存関係管理とモノレポ構成

### コード品質

- **ESLint**: v9 Flat Config + TypeScript + React
- **Prettier**: コードフォーマット
- **TypeScript**: 厳格な型チェック

### コンテナ化

- **Docker**: 開発環境（PostgreSQL + API + Web）
- **Docker Compose**: マルチサービス管理

### CI/CD・認証

- **Firebase**: 認証エミュレーター（開発用）
- **Coverage**: テスト覆度率計測・統合

## 📦 パッケージ詳細

### @others/api

```json
{
  "dependencies": {
    "@nestjs/common": "^11.0.1",
    "@nestjs/graphql": "^13.1.0",
    "@apollo/server": "4.11.3",
    "@prisma/client": "^6.16.2",
    "firebase-admin": "^13.5.0",
    "class-validator": "^0.14.2"
  }
}
```

### @others/web

```json
{
  "dependencies": {
    "react": "19.1.1",
    "@vitejs/plugin-react": "^4.3.3",
    "vite": "^6.0.7"
  }
}
```

### @others/mobile

```json
{
  "dependencies": {
    "react-native": "0.81.4",
    "expo": "~54.0.10",
    "react": "19.1.1"
  }
}
```

## 🗄️ データベース設計

### Prisma Schema

- **Provider**: PostgreSQL
- **Generator**: Prisma Client (カスタム出力先)
- **構成**: 適切な外部キー制約とインデックス設定
- **認証連携**: Firebase認証との統合

## 🌐 ネットワーク構成

### ポート設定

- **Web**: 3000 (開発) / 3008 (Docker)
- **API**: 4000 (開発) / 4008 (Docker)
- **PostgreSQL**: 5432 (Docker内部) / 5438 (ホスト)
- **Firebase Auth**: 7008 (エミュレーター)
- **Firebase UI**: 6008 (エミュレーター)

### Docker環境

- **Network**: others-network (bridge)
- **Volume**: postgres_data (永続化)
- **Health Check**: PostgreSQL接続監視

## 📋 設定ファイル

### TypeScript設定

- **Base Config**: tsconfig.base.json (共通設定)
- **Path Mapping**: ワークスペース間参照設定
- **Strict Mode**: 有効（型安全性重視）

### ESLint設定

- **Config Type**: Flat Config (v9)
- **Plugin**: TypeScript + React + Prettier
- **Rules**: 厳格なTypeScript・React規約

### Turborepo設定

```json
{
  "tasks": {
    "build": { "dependsOn": ["^build"] },
    "dev": { "cache": false, "persistent": true },
    "test": { "outputs": ["coverage/**"] }
  }
}
```

## 🚀 環境構築コマンド

### 初期セットアップ

```bash
# 依存関係インストール
yarn install

# Prismaクライアント生成
yarn workspace @others/api db:generate

# データベースセットアップ
yarn workspace @others/api db:push
yarn workspace @others/api db:seed
```

### 開発サーバー起動

```bash
# 個別起動
yarn workspace @others/web dev    # Web (Port: 3000)
yarn workspace @others/api dev    # API (Port: 4000)

# 全サービス起動
yarn dev
```

### Docker環境

```bash
# サービス起動
docker compose -f docker-compose.dev.yml up -d

# データベースセットアップ
docker compose -f docker-compose.dev.yml exec api yarn workspace @others/api db:push
docker compose -f docker-compose.dev.yml exec api yarn workspace @others/api db:seed
```

### 品質チェック

```bash
yarn test           # 全テスト実行
yarn lint           # Lint実行
yarn type-check     # 型チェック
yarn build          # ビルド
yarn format         # コードフォーマット
```

## 🎯 再現用プロンプト

### 基本構成

「以下の技術スタックでモノレポプロジェクトを作成してください：

**アーキテクチャ**:

- Yarn Workspaces + Turborepo
- TypeScript 5.7.3 + 厳格な型チェック
- ESLint v9 Flat Config + Prettier

**アプリケーション**:

- `apps/api`: NestJS + GraphQL + Prisma + PostgreSQL
- `apps/web`: React 19 + Vite
- `apps/mobile`: React Native + Expo

**共通パッケージ**:

- `packages/types`: 型定義
- `packages/validation`: Zodスキーマ
- `packages/ui`: React/RN共通コンポーネント
- `packages/graphql-client`: Apollo Client設定
- `packages/design-tokens`: デザインシステム
- `packages/utils`: ユーティリティ関数
- `packages/config`: 共通設定（ESLint、Prettier、TypeScript）

**開発環境**:

- Docker Compose（PostgreSQL + 開発サーバー）
- Firebase認証エミュレーター
- Jest + テスト覆度率
- Prisma（コード生成 + マイグレーション）」

### 詳細要件

「各パッケージの依存関係とワークスペース参照を適切に設定し、TypeScriptのパスマッピングを構成してください。APIには1つのサンプルクエリ、Web/Mobileには初期画面のみ実装してください。Docker開発環境とタスク実行用のTurborepo設定も含めてください。」

## 📚 重要な設計判断

### モノレポ戦略

- **コード共有**: 2つ以上のアプリで使用されるコードは必ずpackagesに配置
- **プラットフォーム対応**: `.tsx`（Web）/ `.native.tsx`（Mobile）パターン
- **依存関係管理**: workspace:\*を使用した内部パッケージ参照

### 型安全性

- **厳格設定**: strict mode有効、any使用制限
- **GraphQL**: Schema-First開発、自動型生成
- **バリデーション**: Zodによる実行時型チェック

### 開発体験

- **HMR**: Vite（Web）、Expo（Mobile）による高速リロード
- **コンテナ化**: Volume mountによるソースコード変更の自動反映
- **品質保証**: pre-commit hookなしで、手動実行による品質チェック

---

> **Note**: このドキュメントは技術構成のみを記載しており、ビジネスロジックや要件定義は含まれていません。
