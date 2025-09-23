# @others/mobile

React Native (Expo) ベースのモバイルアプリケーションです。

## 📖 概要

Others Projectのモバイルアプリケーションです。React NativeとExpoを使用して構築されており、iOS・Android両方のプラットフォームに対応しています。

## 🚀 開発

### 開発サーバーの起動

```bash
npm run dev
# または
npm run start
```

### プラットフォーム別起動

```bash
# iOS シミュレーター
npm run ios

# Android エミュレーター
npm run android

# Webブラウザ
npm run web
```

### 型チェック

```bash
npm run type-check
```

### リント

```bash
npm run lint
```

### キャッシュクリア

```bash
npm run clean
```

## 🛠️ 技術スタック

- **React Native** - クロスプラットフォームモバイル開発
- **Expo** - React Native開発プラットフォーム
- **React 19** - UIライブラリ
- **TypeScript 5** - 型安全性
- **@others/types** - 共有型定義
- **@others/validation** - バリデーションスキーマ

## 📁 構造

```
├── App.js          # メインアプリケーションコンポーネント
├── index.js        # エントリーポイント
├── app.json        # Expo設定
├── package.json    # 依存関係とスクリプト
└── assets/         # 画像・アイコンなどのアセット
    ├── icon.png
    ├── splash-icon.png
    ├── adaptive-icon.png
    └── favicon.png
```

## 📱 機能

現在開発中のモバイルアプリケーションです。
今後、以下のような機能が追加される予定です：

- ユーザー認証
- 投稿機能
- 感情選択機能
- プッシュ通知
- オフライン機能
- カメラ連携
- ユーザープロフィール
- その他のソーシャル機能

## 🔧 開発環境セットアップ

### 必要な環境

- Node.js 18以上
- Expo CLI
- iOS Simulator (iOS開発の場合)
- Android Studio/Android Emulator (Android開発の場合)

### Expo CLIのインストール

```bash
npm install -g @expo/cli
```

### デバイスでの実行

Expo Goアプリをスマートフォンにインストールし、QRコードをスキャンして実行できます。

## 📦 ビルド・デプロイ

### Expo Application Services (EAS) を使用したビルド

```bash
# EAS CLIのインストール
npm install -g eas-cli

# プロジェクトの設定
eas init

# ビルド実行
eas build --platform all
```

### アプリストア配布

EAS Submitを使用してアプリストアへの配布が可能です。

## 🧪 テスト

今後、以下のテストフレームワークの導入を予定しています：

- Jest - 単体テスト
- Detox - E2Eテスト
- Expo Testing Library - コンポーネントテスト
