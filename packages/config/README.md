# @others/config

「他人」アプリケーション共通設定パッケージ

## 📖 概要

このパッケージは、「他人」アプリのmonorepo全体で使用される共通設定ファイルを提供します。TypeScript設定、Prettier設定など、プロジェクト全体で一貫した開発環境を維持するための設定を集約しています。

## 🚀 インストール

このパッケージはワークスペース内でのみ使用されるため、通常は手動でインストールする必要はありません。

```bash
# 他のパッケージから参照する場合
"@others/config": "workspace:*"
```

## 📦 提供設定

### TypeScript設定

#### `tsconfig/base.json`

プロジェクト全体で使用される基本的なTypeScript設定。

```json
{
  "extends": "@others/config/tsconfig/base.json",
  "compilerOptions": {
    // プロジェクト固有の設定を追加
  }
}
```

**含まれる設定:**

- `target: "es2020"`: ES2020をターゲット
- `module: "commonjs"`: CommonJSモジュール形式
- `strict: true`: 厳密な型チェック
- `declaration: true`: 型定義ファイルの生成
- `skipLibCheck: true`: ライブラリの型チェックをスキップ

#### `tsconfig/react.json`

React プロジェクト専用のTypeScript設定。

```json
{
  "extends": "@others/config/tsconfig/react.json"
}
```

**追加設定:**

- `jsx: "react-jsx"`: React 17+ のJSX変換
- `lib: ["dom", "dom.iterable", "es6"]`: DOM API の有効化
- `moduleResolution: "node"`: Node.js形式のモジュール解決
- `allowSyntheticDefaultImports: true`: デフォルトインポートの許可

### Prettier設定

#### `prettier/index.json`

プロジェクト全体で統一されたコードフォーマット設定。

```json
{
  "extends": "@others/config/prettier/index.json"
}
```

**設定内容:**

- `printWidth: 80`: 1行の最大文字数
- `tabWidth: 2`: インデント幅
- `useTabs: false`: スペースでインデント
- `semi: true`: セミコロン必須
- `singleQuote: true`: シングルクォート使用
- `trailingComma: "es5"`: 末尾カンマ（ES5互換）
- `bracketSpacing: true`: オブジェクトのブラケット間にスペース
- `arrowParens: "avoid"`: アロー関数の引数の括弧を省略

## 🔧 使用方法

### TypeScript設定の継承

各パッケージの`tsconfig.json`で共通設定を継承：

```json
{
  "extends": "@others/config/tsconfig/base.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

### React プロジェクトでの使用

Web・Mobileアプリでは React 設定を使用：

```json
{
  "extends": "@others/config/tsconfig/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Prettier設定の適用

プロジェクトルートの`.prettierrc.json`で参照：

```json
{
  "extends": "@others/config/prettier/index.json"
}
```

または、各パッケージで個別に設定：

```json
{
  "extends": "../../packages/config/prettier/index.json"
}
```

## 📁 構造

```text
├── package.json          # パッケージ定義
├── tsconfig/
│   ├── base.json         # 基本TypeScript設定
│   └── react.json        # React用TypeScript設定
└── prettier/
    └── index.json        # Prettier設定
```

## 🎯 設計方針

### 一貫性の確保

- 全パッケージで同一のコーディングスタイル
- TypeScriptの厳密な型チェック
- モダンなJavaScript/TypeScript機能の活用

### 拡張性

- プロジェクト固有の設定は各パッケージで追加
- 基本設定は最小限に保持
- 新しいフレームワーク・ツールへの対応が容易

### メンテナンス性

- 設定の一元管理
- 設定変更時の影響範囲を明確化
- ドキュメント化された設定理由

## 🔄 更新とメンテナンス

### 設定を更新する場合

1. このパッケージの設定ファイルを修正
2. 影響を受ける全パッケージでテスト実行
3. 必要に応じて各パッケージの個別設定を調整

### 新しい設定の追加

新しいツール（ESLint、Jest等）の設定を追加する場合：

1. `package.json`の`files`配列に新しいディレクトリを追加
2. 適切なディレクトリ構造で設定ファイルを作成
3. READMEに使用方法を追記

## 📝 ライセンス

このパッケージは「他人」アプリケーションの一部として、プロジェクト全体のライセンスに従います。

## 🤝 貢献

設定の改善提案や新しいツールの設定追加は、プロジェクト全体への影響を考慮して慎重に検討してください。
