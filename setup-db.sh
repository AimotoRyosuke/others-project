#!/bin/bash

# Prismaを使ったデータベースの初期セットアップスクリプト

echo "🔧 Prismaデータベースのセットアップを開始します..."

# ローカル開発環境でのセットアップ（yarn workspaceコマンドを使用）
echo "📍 ローカル開発環境でのセットアップを実行中..."

# Prismaクライアントの生成
echo "📦 Prismaクライアントを生成中..."
yarn workspace @others/api db:generate

# データベーススキーマをプッシュ  
echo "🗄️ データベーススキーマを適用中..."
yarn workspace @others/api db:push

# シードデータが既に投入されているかチェック
echo "🔍 既存データをチェック中..."
if yarn workspace @others/api prisma db seed --preview-feature 2>/dev/null; then
    echo "🌱 シードデータを投入中..."
    yarn workspace @others/api db:seed
else
    echo "✅ シードデータは既に投入済みです"
fi

echo "✅ Prismaデータベースのセットアップが完了しました！"
echo "💡 Prisma Studioでデータを確認:"
echo "   yarn workspace @others/api db:studio"