# API ディレクトリ構成の改善提案

## 現在の構成

```
src/
├── app.controller.ts       # ヘルスチェック
├── app.module.ts          # メインモジュール
├── main.ts               # エントリーポイント
├── config/               # 設定ファイル
├── core/                 # コア機能
│   ├── auth/            # 認証
│   ├── common/          # 共通ユーティリティ
│   ├── graphql/         # GraphQL定義
│   └── prisma/          # DB接続
└── features/            # 機能別モジュール
    ├── posts/
    ├── users/
    └── notes/
```

## 改善提案

### 1. 共通機能の整理

- `core/common/` に以下を追加：
  - `dto/` - 共通データ転送オブジェクト
  - `interfaces/` - 共通インターフェース
  - `decorators/` - カスタムデコレーター
  - `filters/` - エラーフィルター
  - `guards/` - カスタムガード
  - `interceptors/` - インターセプター
  - `pipes/` - カスタムパイプ

### 2. バリデーション層の強化

- `core/validation/` ディレクトリを作成
  - Zodスキーマベースのバリデーション
  - カスタムバリデーションルール

### 3. ビジネスロジック層の分離

各feature内で：

```
features/posts/
├── dto/                # PostsModule専用DTO
├── entities/           # Domain entities
├── repositories/       # データアクセス層
├── services/          # ビジネスロジック
├── resolvers/         # GraphQL resolvers
└── __tests__/         # テスト
```

### 4. 設定管理の改善

```
config/
├── database.config.ts
├── auth.config.ts
├── graphql.config.ts
└── app.config.ts
```

## リファクタリング実施内容

### ✅ 完了項目

1. **重複コードの削除**
   - PostsService内の重複メソッド統合
   - Prisma includeクエリの共通化
   - ページネーション処理の共通化

2. **エラーハンドリング統一**
   - 共通エラークラス作成
   - GraphQLエラー対応

3. **バリデーション統一**
   - ポリシーチェックの統合

### 🔄 継続改善項目

1. Repository パターンの導入
2. CQRS パターンの検討（複雑になった場合）
3. Domain Event の実装
4. より詳細なテストカバレッジ
5. API ドキュメントの自動生成

## パフォーマンス改善案

1. **データベースクエリ最適化**
   - N+1問題の解決（現在は適切にincludeを使用）
   - インデックスの最適化
   - 適切な pagination 実装

2. **キャッシュ戦略**
   - Redis によるクエリキャッシュ
   - レスポンスキャッシュ

3. **バッチ処理**
   - GraphQL DataLoader の活用
   - バルク操作の最適化
