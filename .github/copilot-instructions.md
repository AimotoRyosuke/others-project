# 開発ルール - Others Project

> このファイルは開発者とAIアシスタントが従うべき必須ルールです。

## 🚨 重要な開発原則

### 1. 共通化の徹底

**ルール**: 2つ以上のアプリで使用されるコードは必ず `packages/` に配置

| パッケージ               | 用途                | 例                    |
| ------------------------ | ------------------- | --------------------- |
| `@others/types`          | 型定義              | GraphQL型、ドメイン型 |
| `@others/validation`     | バリデーション      | Zodスキーマ           |
| `@others/design-tokens`  | デザインシステム    | 色、フォント          |
| `@others/ui`             | UIコンポーネント    | Button、Modal         |
| `@others/graphql-client` | GraphQLクライアント | Apollo Client設定     |
| `@others/utils`          | ユーティリティ      | 共通関数              |
| `@others/config`         | 設定                | ESLint、TypeScript    |

**プラットフォーム対応**:

- `Component.tsx` → Web (React)
- `Component.native.tsx` → Mobile (React Native)

### 2. テスト実装必須

**カバレッジ要件**:

- **Packages**: 80%以上
- **Web/Mobile**: 70%以上
- **API**: 85%以上

### 3. 品質チェック必須

**開発完了時の必須実行**:

```bash
yarn test && yarn lint && yarn type-check && yarn build
```

## 🧪 テスト要件

### テスト種別

| アプリ/パッケージ | テスト種別           | ツール                               | カバレッジ |
| ----------------- | -------------------- | ------------------------------------ | ---------- |
| **Packages**      | 単体テスト           | Jest                                 | 80%以上    |
| **Web**           | コンポーネント + E2E | React Testing Library + Playwright   | 70%以上    |
| **Mobile**        | コンポーネント + E2E | React Native Testing Library + Detox | 70%以上    |
| **API**           | 単体 + 統合 + E2E    | Jest + Supertest                     | 85%以上    |

### テスト実行コマンド

```bash
# 全体テスト
yarn test

# 特定パッケージ
yarn workspace @others/validation test
yarn workspace @others/web test
yarn workspace @others/api test:e2e

# カバレッジ確認
yarn test:coverage
```

## 📚 Storybook管理

**対象**: 再利用可能なUIコンポーネント（Button、Modal、Form部品等）

**必要なStory**:

- Default（基本状態）
- Variants（全バリエーション）
- States（hover、disabled、loading）
- Responsive（画面サイズ対応）

```bash
# Storybook実行
yarn storybook:build
yarn test-storybook
```

## ✅ 開発完了チェックリスト

**プルリクエスト前に必須実行**:

```bash
# 1. 全品質チェック（必須）
yarn test && yarn lint && yarn type-check && yarn build

# 2. 自動修正
yarn lint --fix
yarn format

# 3. UIコンポーネント開発時のみ
yarn storybook:build
yarn test-storybook
```

**チェック項目**:

- [ ] テスト実行・パス
- [ ] Lintエラー0件
- [ ] TypeScriptエラー0件
- [ ] ビルド成功
- [ ] カバレッジ要件達成

## 🚫 禁止事項・注意点

### ❌ 絶対禁止

- 共通化可能なコードの重複実装
- テストなしでのコード提出
- Lintエラーの放置
- `any`の多用
- UIコンポーネントのStorybook未対応

### ⚠️ 品質要件

- **パフォーマンス**: 不要な再レンダリング回避
- **セキュリティ**: 機密情報のログ出力禁止
- **アクセシビリティ**: WCAG 2.1 AA準拠
- **レスポンシブ**: モバイルファースト

## 🛠️ 開発コマンドリファレンス

### 基本コマンド

```bash
# セットアップ
yarn install
yarn dev

# 個別開発サーバー
yarn workspace @others/web dev
yarn workspace @others/api dev

# テスト
yarn test
yarn test:watch
yarn test:coverage

# 品質チェック
yarn lint
yarn lint --fix
yarn type-check
yarn format

# ビルド
yarn build
```

### パッケージ管理

```bash
# 依存関係追加
yarn workspace @others/web add react-router-dom
yarn workspace @others/api add @nestjs/jwt

# ワークスペース間依存
yarn workspace @others/web add @others/types@workspace:*
```

### データベース（API）

```bash
yarn workspace @others/api db:push
yarn workspace @others/api db:seed
yarn workspace @others/api db:studio
```

---

> **重要**: このルールに従わない場合、コードレビューで差し戻しとなります。

## 📝 Git規約

### Conventional Commits

**形式**: `type(scope): description`

```text
# ✅ 推奨コミットメッセージ形式
feat(web): add user profile component
fix(api): resolve GraphQL authentication error
docs: update development rules
test(validation): add post schema tests
refactor(design-tokens): restructure color system
perf(web): optimize bundle size with code splitting
style: fix ESLint warnings
chore(deps): update dependencies

# ❌ 避けるべき形式
"fix bug"         # 何を修正したか不明
"update code"     # 変更内容が不明
"WIP"            # 作業途中でのコミット禁止
"tmp"            # 一時的なコミット禁止
```

**コミット種別**:

- `feat`: 新機能追加
- `fix`: バグ修正
- `docs`: ドキュメント変更
- `test`: テスト追加・修正
- `refactor`: リファクタリング
- `perf`: パフォーマンス改善
- `style`: コードスタイル修正
- `chore`: ビルド・依存関係等の修正

### ブランチ戦略

```bash
# ✅ 推奨ブランチ命名
feature/user-profile-page
fix/graphql-auth-error
refactor/design-token-structure
chore/update-dependencies

# ❌ 避けるべき命名
my-branch
test123
fix
```

## 🔒 セキュリティ・環境変数

### 環境変数管理

**ルール**: 全ての環境変数は `packages/config` で型安全に管理

```typescript
// packages/config/src/env.ts
export const env = {
  API_URL: process.env.VITE_API_URL!,
  DATABASE_URL: process.env.DATABASE_URL!,
  JWT_SECRET: process.env.JWT_SECRET!,
  NODE_ENV: process.env.NODE_ENV as 'development' | 'test' | 'production',
} as const;
```

### セキュリティ要件

- ❌ **機密情報のコミット禁止**
- ✅ **`.env.example`の作成必須**
- ✅ **型定義とバリデーション必須**

## ⚡ パフォーマンス要件

### バンドルサイズ制限

| 項目         | 制限          |
| ------------ | ------------- |
| 初期バンドル | 500KB以下     |
| チャンク     | 200KB以下     |
| 画像形式     | WebP/AVIF推奨 |

### Core Web Vitals目標

- **LCP**: 2.5秒以下
- **FID**: 100ms以下
- **CLS**: 0.1以下

### 最適化必須項目

- ✅ 画像の遅延読み込み（`loading="lazy"`）
- ✅ 適切な`alt`属性とサイズ指定
- ✅ 不要な再レンダリング回避

## ♿ アクセシビリティ要件

### 必須対応

- **WCAG 2.1 AA準拠**
- **A11yテスト実装** (jest-axe使用)
- **セマンティックHTML使用**
- **適切なARIA属性**
- **キーボードナビゲーション対応**

### チェック項目

```typescript
// A11yテスト例
import { axe, toHaveNoViolations } from 'jest-axe';

it('should be accessible', async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### 必須属性

- `alt`: 画像の代替テキスト
- `aria-label`: 要素の説明
- `role`: 要素の役割
- `tabIndex`: キーボードフォーカス

## 📚 ドキュメント要件

### README構造（パッケージ用）

```markdown
# Package Name

## 📋 概要

パッケージの目的と責務

## 🚀 使用方法

インストール・基本使用例

## 📖 API仕様

公開関数・型の一覧

## 🧪 テスト

テスト実行方法・カバレッジ

## 🔄 変更履歴

主要な変更記録
```

### コードコメント

**JSDoc形式必須**:

```typescript
/**
 * 関数の説明
 * @param data - パラメータ説明
 * @returns 戻り値説明
 * @example
 * const result = validatePost(data);
 */
export const validatePost = (data: CreatePostRequest) => {
  // 実装
};
```

---

**質問・相談**: チームメンバーまたはドキュメントを確認してください。

### コードコメント規約

````typescript
// ✅ 推奨 - JSDoc形式のコメント
/**
 * ユーザーの投稿データを検証します
 * @param data - 検証対象の投稿データ
 * @returns 検証結果とエラーメッセージ
 * @example
 * ```typescript
 * const result = validatePost({ whatPerson: "友達", emotions: ["happy"] });
 * if (result.success) {
 *   console.log("バリデーション成功");
 * }
 * ```
 */
export const validatePost = (data: CreatePostRequest): ValidationResult => {
  // 実装
};

// ❌ 避ける - 不明瞭なコメント
// なんかバリデーションする関数
export const validatePost = (data: any) => {
  // TODO: あとで実装
};

// ❌ 避ける - 不要なコメント
// 1足した数を返す関数
export const increment = (num: number) => {
  return num + 1;
};
````
