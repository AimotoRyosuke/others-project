#!/bin/bash

# Prismaを使ったデータベースの初期セットアップスクリプト（Docker環境用）

echo "🔧 Prismaデータベースのセットアップを開始します..."

# Docker環境でAPIコンテナが起動しているか確認
if ! docker compose -f docker-compose.dev.yml ps api | grep -q "Up"; then
    echo "❌ APIコンテナが起動していません。まず './start.sh dev' で環境を起動してください。"
    exit 1
fi

# Prismaクライアントの生成
echo "📦 Prismaクライアントを生成中..."
docker compose -f docker-compose.dev.yml exec api sh -c "cd /app/apps/api && npx prisma generate"

# データベーススキーマをプッシュ
echo "🗄️ データベーススキーマを適用中..."
docker compose -f docker-compose.dev.yml exec api sh -c "cd /app/apps/api && npx prisma db push"

# シードデータの投入
echo "🌱 シードデータを投入中..."
docker compose -f docker-compose.dev.yml exec api sh -c "cd /app/apps/api && npx ts-node prisma/seed.ts"

echo "✅ Prismaデータベースのセットアップが完了しました！"
echo "💡 Prisma Studioでデータを確認:"
echo "   docker compose -f docker-compose.dev.yml exec api sh -c 'cd /app/apps/api && npx prisma studio'"