# @others/api

NestJS 11ベースのAPIサーバーです。

## 📖 概要

Others ProjectのバックエンドAPIサーバーです。NestJS 11を使用して構築されており、Firebase Adminによる認証機能を提供します。

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
npm run start:prod
```

### テスト

```bash
# 単体テスト
npm run test

# E2Eテスト
npm run test:e2e

# テストカバレッジ
npm run test:cov
```

### リント

```bash
npm run lint
```

### 型チェック

```bash
npm run type-check
```

## 🛠️ 技術スタック

- **NestJS 11** - Node.jsフレームワーク
- **TypeScript 5** - 型安全性
- **Firebase Admin** - 認証・データベース
- **Class Validator** - バリデーション
- **RxJS** - リアクティブプログラミング
- **@others/types** - 共有型定義
- **@others/validation** - バリデーションスキーマ

## 📁 構造

```
src/
├── app.controller.ts       # アプリケーションコントローラー
├── app.module.ts          # ルートモジュール
├── app.service.ts         # アプリケーションサービス
├── main.ts               # エントリーポイント
├── auth/
│   └── firebase.guard.ts  # Firebase認証ガード
├── common/
│   └── policy.ts         # 共通ポリシー
└── posts/
    └── dto/
        └── create-post.dto.ts  # 投稿作成DTO
```

## 🔐 認証

Firebase Adminを使用したJWT認証を実装しています。

### 環境変数

以下の環境変数が必要です：

```bash
# Firebase設定
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email
```

## 📡 API エンドポイント

現在開発中のAPIサーバーです。
今後、以下のようなエンドポイントが追加される予定です：

### 認証

- `POST /auth/login` - ユーザーログイン
- `POST /auth/register` - ユーザー登録
- `POST /auth/refresh` - トークンリフレッシュ

### 投稿

- `GET /posts` - 投稿一覧取得
- `POST /posts` - 投稿作成
- `GET /posts/:id` - 投稿詳細取得
- `PUT /posts/:id` - 投稿更新
- `DELETE /posts/:id` - 投稿削除

### ユーザー

- `GET /users/profile` - プロフィール取得
- `PUT /users/profile` - プロフィール更新

## 🧪 テスト

Jestを使用したテストスイートが設定されています。

```bash
# 全テスト実行
npm run test

# ウォッチモード
npm run test:watch

# デバッグモード
npm run test:debug
```

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
