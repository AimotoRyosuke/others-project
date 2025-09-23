# Dev Container 開発環境

VS CodeのDev Containers拡張機能を使用した開発環境です。

## 🚀 セットアップ

### 1. 前提条件

- Docker Desktop がインストール済み
- VS Code がインストール済み
- VS Code Dev Containers 拡張機能がインストール済み

### 2. Dev Container の起動

1. VS Code でプロジェクトを開く
2. コマンドパレット（`Ctrl+Shift+P` / `Cmd+Shift+P`）を開く
3. `Dev Containers: Reopen in Container` を選択
4. しばらく待つとコンテナ内で開発環境が起動します

### 3. 初回セットアップ

Dev Containerが起動したら、以下のタスクを実行してデータベースをセットアップ：

1. `Ctrl+Shift+P` でコマンドパレットを開く
2. `Tasks: Run Task` を選択
3. `Setup Database (Full)` を選択して実行

または、ターミナルで直接実行：

```bash
yarn workspace @others/api db:generate
yarn workspace @others/api db:push
yarn workspace @others/api db:seed
```

## 🔧 利用可能なタスク

VS Codeのタスク機能（`Ctrl+Shift+P` → `Tasks: Run Task`）で以下が利用可能：

### 開発サーバー

- **Start All Dev Servers** - WebとAPIの両方を起動
- **Start Web Dev Server** - Next.js開発サーバーのみ起動
- **Start API Dev Server** - NestJS開発サーバーのみ起動

### データベース

- **Setup Database (Full)** - 完全なDB初期化（推奨）
- **Generate Prisma Client** - Prismaクライアント生成
- **Push Database Schema** - スキーマをDBに適用
- **Seed Database** - シードデータ投入
- **Open Prisma Studio** - データベース管理GUI

### 品質チェック

- **Build All** - 全プロジェクトビルド
- **Lint All** - ESLint実行
- **Type Check All** - TypeScript型チェック

## 🐛 デバッグ

VS Codeのデバッグ機能（`F5`）で以下が利用可能：

- **Debug API (NestJS)** - NestJS APIのデバッグ
- **Debug Next.js (Web)** - Next.js Webアプリのデバッグ
- **Debug Prisma Seed** - シードスクリプトのデバッグ
- **Debug Full Stack** - フルスタックデバッグ

## 🌐 アクセスURL

Dev Container起動後、以下のURLでアクセス可能：

- **Web (Next.js)**: <http://localhost:3008>
- **API (NestJS)**: <http://localhost:4008>
- **Prisma Studio**: <http://localhost:5555> (タスクで起動後)

## 📦 インストール済みツール

Dev Containerには以下がプリインストール：

- Node.js 18 + Yarn 4
- NestJS CLI
- Prisma CLI
- Git, SSH, curl, wget
- bash, zsh, nano, vim

## 🔄 VS Code拡張機能

以下の拡張機能が自動インストール：

### Next.js開発

- React/TypeScript サポート
- TailwindCSS IntelliSense
- HTML/CSS 自動補完
- React Snippets
- Auto Rename Tag

### NestJS開発

- NestJS サポート
- GraphQL サポート (Apollo)
- REST Client (Thunder Client)
- PostgreSQL クライアント

### 品質管理

- ESLint + Prettier
- Jest テストサポート
- Coverage Gutters
- TODO Highlight

### 開発支援

- Docker サポート
- GitLens + Git Graph
- Path IntelliSense
- Better Comments
- TypeScript Hero

## 💡 便利なコマンド

```bash
# 開発サーバー起動
yarn dev

# プロジェクト全体のビルド
yarn build

# リント実行
yarn lint

# Prisma Studio起動
yarn workspace @others/api db:studio

# データベースリセット
yarn workspace @others/api db:reset
```

## 🔧 トラブルシューティング

### コンテナが起動しない

```bash
# Docker Desktop を再起動
# または既存のコンテナを削除
docker system prune -a
```

### データベース接続エラー

```bash
# データベースサービスの状態確認
docker compose -f docker-compose.dev.yml ps

# データベースを再起動
docker compose -f docker-compose.dev.yml restart db
```

### Prismaクライアントエラー

```bash
# Prismaクライアント再生成
yarn workspace @others/api db:generate
```
