# @others/graphql-client

## 📋 概要

Apollo Clientの共通設定とGraphQLクライアントの設定を提供するライブラリです。
Web・Mobile・APIアプリケーション間でGraphQLクエリを統一的に管理します。

## 🚀 使用方法

### インストール

```bash
# Web アプリケーションの場合
yarn workspace @others/web add @others/graphql-client@workspace:*

# Mobile アプリケーションの場合
yarn workspace @others/mobile add @others/graphql-client@workspace:*
```

### 基本設定例

```typescript
import { createApolloClient } from '@others/graphql-client';

// Apollo Client インスタンスを作成
const client = createApolloClient({
  uri: 'http://localhost:4008/graphql',
  enableDevtools: process.env.NODE_ENV === 'development',
});

// React アプリケーションでの使用
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      {/* アプリケーションコンテンツ */}
    </ApolloProvider>
  );
}
```

## 📖 API仕様

### 主要な関数・設定

| 関数/設定              | 説明                          | 使用例                        |
| ---------------------- | ----------------------------- | ----------------------------- |
| `createApolloClient`   | Apollo Clientインスタンス作成 | `createApolloClient({ uri })` |
| `defaultErrorHandling` | エラーハンドリング設定        | 自動適用                      |
| `authenticationLink`   | 認証トークン管理              | 自動適用                      |
| `cacheConfig`          | キャッシュ設定                | 自動適用                      |

### GraphQL Code Generation

```bash
# GraphQLスキーマからTypeScript型を生成
yarn codegen

# 自動生成ファイル
# - src/generated/graphql.ts
# - src/generated/operations.ts
```

## 🧪 テスト

```bash
# テスト実行
yarn test

# カバレッジ確認
yarn test:coverage
```

### テスト要件

- **カバレッジ**: 80%以上
- **単体テスト**: Apollo Client設定のテスト
- **統合テスト**: GraphQLクエリの実行テスト

## 🔄 変更履歴

- `0.1.0` - 初期バージョン、Apollo Client基本設定準備中
