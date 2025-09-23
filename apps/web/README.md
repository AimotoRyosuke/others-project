# @others/web

Next.js 15ベースのWebアプリケーションです。

## 📖 概要

Others ProjectのWebフロントエンドアプリケーションです。Next.js 15とTurbopackを使用して構築されています。
SEO最適化するためにExpoのweb機能を使用せず、Next.jsを採用しています

## 🚀 開発

### 開発サーバーの起動

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

### プロダクション起動

```bash
npm run start
```

### リント

```bash
npm run lint
```

## 🛠️ 技術スタック

- **Next.js 15** - Reactフレームワーク（Turbopack使用）
- **React 19** - UIライブラリ
- **TypeScript 5** - 型安全性
- **@others/types** - 共有型定義
- **@others/ui** - 共有UIコンポーネント
- **@others/validation** - バリデーションスキーマ

## 📁 構造

```text
app/
├── layout.tsx      # ルートレイアウト
├── page.tsx        # ホームページ
├── globals.css     # グローバルスタイル
└── favicon.ico     # ファビコン
```

## 🌐 機能

現在開発中のWebアプリケーションです。
今後、以下のような機能が追加される予定です：

- ユーザー認証
- 投稿機能
- 感情選択機能
- ユーザープロフィール
- その他のソーシャル機能

## Next.jsについて

このプロジェクトは[Next.js](https://nextjs.org)で構築されており、[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)でブートストラップされています。

### フォント最適化

このプロジェクトは[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)を使用して、Vercelの新しいフォントファミリー[Geist](https://vercel.com/font)を自動的に最適化・読み込みします。

### 詳細情報

Next.jsについて詳しく学ぶには、以下のリソースをご覧ください：

- [Next.js Documentation](https://nextjs.org/docs) - Next.jsの機能とAPIについて学ぶ
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアル

### デプロイ

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsの作成者による[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)を使用することです。

詳細については、[Next.jsデプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)をご確認ください。
