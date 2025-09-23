# Others Project Monorepo

他人アプリケーションのmonorepo構成プロジェクトです。

## 🏗️ プロジェクト構成

このプロジェクトは、Turborepoを使用したmonorepo構成で、複数のアプリケーションと共有パッケージで構成されています。

### 📱 アプリケーション (`apps/`)

- **`@others/web`** - Next.js 15ベースのWebアプリケーション
- **`@others/api`** - NestJSベースのAPIサーバー
- **`@others/mobile`** - React Native（Expo）ベースのモバイルアプリ

### 📦 共有パッケージ (`packages/`)

- **`@others/types`** - TypeScript型定義の共有パッケージ
- **`@others/ui`** - React UIコンポーネントライブラリ
- **`@others/validation`** - Zodベースのバリデーションスキーマ

## 🚀 クイックスタート

### 必要な環境

- Node.js 18以上
- npm 9以上

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
# 全アプリケーションの開発サーバーを並列起動
npm run dev
```

### ビルド

```bash
# 全パッケージをビルド
npm run build
```

## 📋 利用可能なスクリプト

| スクリプト           | 説明                             |
| -------------------- | -------------------------------- |
| `npm run dev`        | 全アプリの開発サーバーを起動     |
| `npm run build`      | 全パッケージをビルド             |
| `npm run lint`       | ESLintによるコード品質チェック   |
| `npm run test`       | テストの実行                     |
| `npm run type-check` | TypeScriptの型チェック           |
| `npm run format`     | Prettierによるコードフォーマット |
| `npm run clean`      | ビルドファイルのクリーンアップ   |

## 🛠️ 技術スタック

### フロントエンド

- **Next.js 15** (Turbopack)
- **React 19**
- **TypeScript 5**

### バックエンド

- **NestJS 11**
- **Firebase Admin**
- **TypeScript 5**

### モバイル

- **React Native**
- **Expo**
- **TypeScript 5**

### 開発ツール

- **Turborepo** - モノレポ管理
- **ESLint** - コード品質
- **Prettier** - コードフォーマット
- **TypeScript** - 型安全性

## 📁 ディレクトリ構造

```
others-project/
├── apps/
│   ├── api/          # NestJS APIサーバー
│   ├── mobile/       # React Native モバイルアプリ
│   └── web/          # Next.js Webアプリ
├── packages/
│   ├── types/        # 共有型定義
│   ├── ui/           # UI コンポーネント
│   └── validation/   # バリデーションスキーマ
├── package.json      # ルート設定
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
- コミット前に `npm run lint` と `npm run format` を実行
- TypeScript の strict モードを使用

## 📄 ライセンス

非公開プロジェクト
