#!/bin/bash

# 《凡人修仙传》Web应用启动脚本

echo "🚀 启动《凡人修仙传》Web应用..."

# 检查Node.js版本
NODE_VERSION=$(node --version)
echo "📦 Node.js 版本: $NODE_VERSION"

# 进入前端目录
cd frontend

# 安装依赖
echo "📦 安装依赖..."
if [ ! -d "node_modules" ]; then
    npm install
else
    echo "📦 依赖已安装，跳过..."
fi

# 启动开发服务器
echo "🚀 启动开发服务器..."
echo "🌐 应用将在 http://localhost:3000 启动"
echo "📱 请用浏览器打开上述地址"
echo ""
echo "📊 项目信息："
echo "   - 名称：《凡人修仙传》Web应用"
echo "   - 技术栈：Next.js + TypeScript + Tailwind CSS"
echo "   - 功能：世界观展示、人物关系图、剧情时间线、门派势力"
echo ""
echo "🛑 按 Ctrl+C 停止服务器"

npm run dev