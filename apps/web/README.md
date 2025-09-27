# @others/web

Vite + React 19ベースのWebアプリケーションです。

## 📖 概要

Others ProjectのWebフロントエンドアプリケーションです。Vite + React 19を使用して構築されています。
LPは別レポジトリで管理し、こちらはサービス本体のアプリケーションとして機能します。

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
yarn preview
```

### リント

```bash
yarn lint
```

### 型チェック

```bash
yarn type-check
```

## 技術スタック

- **React 19** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite** - ビルドツールと開発サーバー
- **@others/types** - 共有型定義
- **@others/design-tokens** - デザイントークン定義
- **@others/validation** - バリデーションスキーマ

## 📁 構造

```text
src/
├── main.tsx        # エントリーポイント
├── App.tsx         # メインアプリコンポーネント
├── App.css         # アプリスタイル
└── index.css       # グローバルスタイル
public/
├── favicon.ico     # ファビコン
└── ...            # 静的アセット
```

## 🌐 機能

現在開発中のWebアプリケーションです。
今後、以下のような機能が追加される予定です：

- ユーザー認証
- 投稿機能
- 感情選択機能
- ユーザープロフィール
- その他のソーシャル機能

## Viteについて

このプロジェクトは[Vite](https://vite.dev)で構築されており、高速なホットリロードとビルド最適化を実現しています。

### フォント最適化

このプロジェクトは`@others/design-tokens`を使用して、一貫したフォントファミリー（Inter, system fonts）を採用しています。

### 詳細情報

Vite + Reactについて詳しく学ぶには、以下のリソースをご覧ください：

- [Vite Documentation](https://vite.dev) - Viteの機能と設定について学ぶ
- [React Documentation](https://react.dev) - Reactの最新機能とベストプラクティス

### デプロイ

Viteアプリをデプロイするには、以下のプラットフォームを推奨します：

- [Vercel](https://vercel.com) - 簡単なGit連携デプロイ
- [Netlify](https://netlify.com) - 高速なCDNと継続デプロイ
- [Cloudflare Pages](https://pages.cloudflare.com) - グローバルエッジデプロイ

詳細については、[Vite デプロイメントドキュメント](https://vite.dev/guide/static-deploy.html)をご確認ください。
