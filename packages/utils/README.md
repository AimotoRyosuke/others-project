# @others/utils

「他人」アプリケーション共通ユーティリティライブラリ

## 📖 概要

このパッケージは、「他人」アプリのweb、mobile、api間で共有される汎用ユーティリティ関数を提供します。日付フォーマット、感情ラベル変換、エラーハンドリングなど、プロジェクト全体で使い回される機能を集約しています。

## 🚀 インストール

```bash
# ワークスペース内での使用
yarn workspace @others/web add @others/utils
# または package.json に直接追加
"@others/utils": "workspace:*"
```

## 📦 提供機能

### 日付・時間関係

#### `formatDate(dateString: string): string`

ISO形式の日付文字列を日本語の相対時間表記に変換します。

```typescript
import { formatDate } from '@others/utils';

formatDate('2023-09-23T10:00:00Z');
// → "今" | "5分前" | "2時間前" | "3日前" | "2023/9/20"
```

**時間差による表示形式:**

- 1分未満: `"今"`
- 1時間未満: `"○分前"`
- 24時間未満: `"○時間前"`
- 7日未満: `"○日前"`
- 7日以上: `"YYYY/M/D"` 形式

### 感情関係

#### `emotionLabels: Record<EmotionCode, string>`

感情コードと日本語ラベルのマッピングオブジェクト。

```typescript
import { emotionLabels } from '@others/utils';

console.log(emotionLabels.happy); // → "嬉しい"
console.log(emotionLabels.sad); // → "悲しい"
```

#### `getEmotionLabel(code: EmotionCode): string`

感情コードから日本語ラベルを取得します。

```typescript
import { getEmotionLabel } from '@others/utils';

getEmotionLabel('happy'); // → "嬉しい"
getEmotionLabel('lonely'); // → "寂しい"
getEmotionLabel('amazing'); // → "すごい"
```

**対応する感情コード:**

- `happy` → 嬉しい
- `sad` → 悲しい
- `lonely` → 寂しい
- `fun` → 楽しい
- `angry` → 怒り
- `scary` → 怖い
- `amazing` → すごい

### テキスト処理

#### `truncateText(text: string, maxLength: number): string`

指定された長さでテキストを切り詰め、末尾に省略記号を追加します。

```typescript
import { truncateText } from '@others/utils';

truncateText('これは長いテキストです', 10);
// → "これは長いテキス..."

truncateText('短いテキスト', 20);
// → "短いテキスト" (変更なし)
```

### ユーザー関係

#### `generateAnonymousName(ordinal: number): string`

序数からデフォルトの匿名ユーザー名を生成します。

```typescript
import { generateAnonymousName } from '@others/utils';

generateAnonymousName(1); // → "anonymous1"
generateAnonymousName(42); // → "anonymous42"
generateAnonymousName(999); // → "anonymous999"
```

### エラーハンドリング

#### `extractErrorMessage(error: unknown): string`

Apollo ClientのGraphQLエラーから適切なエラーメッセージを抽出します。

```typescript
import { extractErrorMessage } from '@others/utils';

// GraphQLエラーの場合
const graphqlError = { graphQLErrors: [{ message: 'バリデーションエラー' }] };
extractErrorMessage(graphqlError); // → "バリデーションエラー"

// ネットワークエラーの場合
const networkError = {
  networkError: { message: 'ネットワークに接続できません' },
};
extractErrorMessage(networkError); // → "ネットワークに接続できません"

// 不明なエラーの場合
extractErrorMessage({}); // → "不明なエラーが発生しました"
```

## 🔧 開発

### ビルド

```bash
yarn build
```

### 型チェック

```bash
yarn type-check
```

### リント

```bash
yarn lint
```

### 開発モード（ウォッチ）

```bash
yarn dev
```

## 📁 構造

```text
src/
└── index.ts          # メインエクスポートファイル
```

## 🏗️ 依存関係

- `@others/types`: EmotionCode型の定義
- `typescript`: TypeScript型定義

## 📝 ライセンス

このパッケージは「他人」アプリケーションの一部として、プロジェクト全体のライセンスに従います。

## 🔄 使用例

```typescript
import {
  formatDate,
  getEmotionLabel,
  truncateText,
  generateAnonymousName,
  extractErrorMessage,
} from '@others/utils';

// 投稿の表示用フォーマット
function formatPost(post: Post) {
  return {
    ...post,
    formattedDate: formatDate(post.createdAt),
    emotionLabels: post.emotions.map(getEmotionLabel),
    shortContent: truncateText(post.whatPerson, 100),
  };
}

// エラーハンドリング
function handleApolloError(error: unknown) {
  const message = extractErrorMessage(error);
  console.error('APIエラー:', message);
  // ユーザーにエラーメッセージを表示
}

// 新規ユーザーのデフォルト名
function getDefaultUsername(ordinal: number) {
  return generateAnonymousName(ordinal);
}
```
