#!/bin/bash

# Docker環境でWebとAPIを起動するスクリプト

echo "🚀 Docker環境を起動します..."

# 開発環境で起動する場合
if [ "$1" = "dev" ] || [ "$1" = "development" ]; then
    echo "📝 開発環境モードで起動します"
    echo "🔗 アクセスURL:"
    echo "   - Web: http://localhost:3008"
    echo "   - API: http://localhost:4008"
    echo "   - DB: postgresql://postgres:password@localhost:5438/othersdb"
    docker compose -f docker-compose.dev.yml up --build
# 本番環境で起動する場合
elif [ "$1" = "prod" ] || [ "$1" = "production" ]; then
    echo "🔧 本番環境モードで起動します"
    echo "⚠️  注意: 本番環境設定は未実装です（docker-compose.yml参照）"
    # docker compose up --build
# デフォルトは開発環境
else
    echo "📝 開発環境モードで起動します（デフォルト）"
    echo "💡 ヒント: './start.sh prod' で本番環境モード起動"
    echo "🔗 アクセスURL:"
    echo "   - Web: http://localhost:3008"
    echo "   - API: http://localhost:4008"
    echo "   - DB: postgresql://postgres:password@localhost:5438/othersdb"
    docker compose -f docker-compose.dev.yml up --build
fi