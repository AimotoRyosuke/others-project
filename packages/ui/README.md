# @others/ui

React UIコンポーネントライブラリです。

## 📖 概要

このパッケージは、Others Projectの全アプリケーション間で共有されるReact UIコンポーネントを提供します。

## 🚀 使用方法

```typescript
import { Button, Card, Modal } from '@others/ui';

function MyComponent() {
  return (
    <Card>
      <Button onClick={() => console.log('clicked')}>
        Click me
      </Button>
    </Card>
  );
}
```

## 🛠️ 開発

### ビルド

```bash
npm run build
```

### 型チェック

```bash
npm run type-check
```

### リント

```bash
npm run lint
```

### 開発モード（ウォッチ）

```bash
npm run dev
```

## 📦 依存関係

- React 19
- @others/types

## 🎨 コンポーネント

現在開発中のコンポーネントライブラリです。
今後、以下のようなコンポーネントが追加される予定です：

- Button - ボタンコンポーネント
- Card - カードコンポーネント
- Modal - モーダルコンポーネント
- Input - 入力フィールドコンポーネント
- その他のUIコンポーネント
