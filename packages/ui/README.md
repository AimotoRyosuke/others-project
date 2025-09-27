# @others/ui

## 📋 概要

Web (React) とMobile (React Native) で共通利用できるUIコンポーネントライブラリです。
デザインシステムに基づいた一貫性のあるUIコンポーネントを提供します。

## 🚀 使用方法

### インストール

```bash
# Web アプリケーションの場合
yarn workspace @others/web add @others/ui@workspace:*

# Mobile アプリケーションの場合
yarn workspace @others/mobile add @others/ui@workspace:*
```

### 基本使用例

```typescript
import { Button, Modal } from '@others/ui';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        クリック
      </Button>

      <Modal isOpen={true} onClose={() => {}}>
        <p>モーダルコンテンツ</p>
      </Modal>
    </div>
  );
}
```

## 📖 API仕様

### コンポーネント一覧

| コンポーネント | 説明                         | プラットフォーム |
| -------------- | ---------------------------- | ---------------- |
| `Button`       | プライマリ・セカンダリボタン | Web / Mobile     |
| `Modal`        | モーダルダイアログ           | Web / Mobile     |
| `Input`        | テキスト入力フィールド       | Web / Mobile     |
| `Card`         | カードレイアウト             | Web / Mobile     |

### プラットフォーム対応

- `Component.tsx` - Web (React) 用の実装
- `Component.native.tsx` - Mobile (React Native) 用の実装

## 🧪 テスト

```bash
# テスト実行
yarn test

# カバレッジ確認
yarn test:coverage

# アクセシビリティテスト
yarn test -- --testNamePattern="accessibility"
```

### テスト要件

- **カバレッジ**: 80%以上
- **アクセシビリティ**: jest-axeによるA11yテスト必須
- **Storybook**: 全コンポーネントでStory作成必須

## 🔄 変更履歴

- `0.1.0` - 初期バージョン、基本コンポーネント準備中
