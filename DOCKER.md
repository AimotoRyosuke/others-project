# Docker環境でのセットアップ手順

## 🐳 Docker環境での開発

### 1. 前提条件

- Docker と Docker Compose がインストール済み
- Git でプロジェクトをクローン済み

### 2. 開発環境の起動

```bash
# プロジェクトディレクトリに移動
cd others-project

# Docker環境で起動（開発モード）
./start.sh dev
```

### 3. アクセスURL

起動後、以下のURLでアクセスできます：

- **Web（Vite+React）**: http://localhost:3008
- **API（NestJS）**: http://localhost:4008
- **Database（PostgreSQL）**: localhost:5438

### 4. データベース接続情報

```
Host: localhost
Port: 5438
Database: othersdb
Username: postgres
Password: password
```

### 5. 開発時の注意点

#### ホットリロード

- ソースコードの変更は自動的に反映されます
- `apps/web/` や `apps/api/src/` の変更を監視

#### ログの確認

```bash
# すべてのサービスのログを表示
docker compose -f docker-compose.dev.yml logs

# 特定のサービスのログを表示
docker compose -f docker-compose.dev.yml logs web
docker compose -f docker-compose.dev.yml logs api
docker compose -f docker-compose.dev.yml logs db
```

#### データベースの操作

```bash
# PostgreSQL コンテナに接続
docker compose -f docker-compose.dev.yml exec db psql -U postgres -d othersdb

# Prismaでスキーマを適用
docker compose -f docker-compose.dev.yml exec api yarn db:push

# シードデータを投入
docker compose -f docker-compose.dev.yml exec api yarn db:seed

# Prisma Studioでデータを確認
docker compose -f docker-compose.dev.yml exec api yarn db:studio

# データベースのリセット
docker compose -f docker-compose.dev.yml down -v
docker compose -f docker-compose.dev.yml up --build
```

### 6. トラブルシューティング

#### ポートが使用中の場合

```bash
# 使用中のポートを確認
lsof -i :3008
lsof -i :4008
lsof -i :5438

# プロセスを終了
kill -9 <PID>
```

#### コンテナの完全リセット

```bash
# 全てのコンテナとボリュームを削除
docker compose -f docker-compose.dev.yml down -v --remove-orphans
docker system prune -a
```

### 7. 本番環境について

現在、本番環境の設定は未実装です（TODO）。
`docker-compose.yml` を参照して、以下の項目を実装予定：

- [ ] Vite production build
- [ ] NestJS production build
- [ ] 環境変数の適切な管理
- [ ] セキュリティ設定
- [ ] ログ設定
- [ ] ヘルスチェック
- [ ] SSL/TLS設定
