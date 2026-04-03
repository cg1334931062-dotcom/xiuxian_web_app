#!/bin/bash

echo "🚀 启动《凡人修仙传》Web应用（极简版）..."
echo "📦 安装依赖..."

cd frontend

# 检查node_modules是否存在
if [ ! -d "node_modules" ]; then
    echo "📦 正在安装依赖..."
    npm install --loglevel=error
    if [ $? -eq 0 ]; then
        echo "✅ 依赖安装成功"
    else
        echo "❌ 依赖安装失败，尝试使用更简单的配置..."
        # 创建最简单的package.json
        cat > package.json << 'EOF'
{
  "name": "fanren-simple",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^13",
    "react": "^18",
    "react-dom": "^18"
  }
}
EOF
        npm install --loglevel=error
    fi
else
    echo "📦 依赖已存在"
fi

echo "🚀 启动开发服务器..."
echo "🌐 应用将在 http://localhost:3000 启动"
echo "📱 请用浏览器打开上述地址"
echo ""
echo "🛑 按 Ctrl+C 停止服务器"

npm run dev