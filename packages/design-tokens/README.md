# @others/design-tokens

「他人」アプリ専用のデザイントークン定義パッケージ

> コンセプト：**他人のままでいい。繋がらないことが美しい。**

## 概要

このパッケージは「他人」アプリで使用するデザイントークン（色、タイポグラフィ、スペーシングなど）を定義します。
一貫したデザインシステムを提供し、ブランドアイデンティティを保持しながら開発効率を向上させます。

## インストール

このパッケージは Others monorepo の一部で、workspace 参照を使用してインポートします。

```json
{
  "dependencies": {
    "@others/design-tokens": "workspace:*"
  }
}
```

## 使用方法

### 基本的な使用

```typescript
import { colors, typography, spacing } from '@others/design-tokens';

// 色の使用
const buttonStyle = {
  backgroundColor: colors.primary[500],
  color: colors.neutral[50],
};

// タイポグラフィの使用
const titleStyle = {
  fontSize: typography.fontSize['2xl'],
  fontWeight: typography.fontWeight.bold,
  fontFamily: typography.fontFamily.sans.join(', '),
};

// スペーシングの使用
const containerStyle = {
  padding: spacing[4],
  margin: spacing[2],
};
```

### 感情色の使用

アプリ特有の感情に対応した色パレット：

```typescript
import { colors } from '@others/design-tokens';

// 感情バッジ
const emotionBadges = Object.entries(colors.emotions).map(([emotion, color]) => (
  <span style={{ backgroundColor: color }}>
    {emotion}
  </span>
));
```

## デザイントークン

### 色 (Colors)

- **Primary**: メインブランドカラー（紫系）
- **Neutral**: グレースケール
- **Emotions**: 感情に対応した色
  - `happy`: 黄色 - 嬉しい
  - `sad`: 青色 - 悲しい  
  - `lonely`: 紫色 - 寂しい
  - `fun`: 緑色 - 楽しい
  - `angry`: 赤色 - 怒り
  - `scary`: グレー - 怖い
  - `amazing`: ピンク - すごい
- **Semantic**: 成功、警告、エラー、情報

### タイポグラフィ (Typography)

- **Font Family**: Inter, system fonts
- **Font Size**: xs (12px) ~ 4xl (36px)
- **Font Weight**: normal, medium, semibold, bold
- **Line Height**: tight, normal, relaxed

### スペーシング (Spacing)

- **System**: 0 ~ 24 (0px ~ 96px)
- **Base Unit**: 0.25rem (4px)

### その他

- **Border Radius**: none ~ full
- **Shadows**: sm ~ xl
- **Z-Index**: hide ~ tooltip (semantic names)
- **Breakpoints**: sm ~ 2xl (responsive design)

## 開発

```bash
# パッケージをビルド
yarn build

# 変更を監視
yarn dev

# 型チェック
yarn type-check

# リント
yarn lint
```

## 型定義

```typescript
// 利用可能な型
import type { 
  Colors, 
  Typography, 
  Spacing,
  BorderRadius,
  Shadows,
  ZIndex,
  Breakpoints
} from '@others/design-tokens';
```
