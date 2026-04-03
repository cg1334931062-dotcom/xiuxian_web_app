# 《凡人修仙传》百科网站 - 设计系统

## 🎨 色彩系统

### 主色调 (仙侠主题)
```css
/* 基础色板 */
--color-immortal-primary: #0ea5e9;      /* 仙气蓝 - 主色调 */
--color-immortal-secondary: #10b981;    /* 灵气绿 - 次要色 */
--color-immortal-accent: #8b5cf6;       /* 紫气东来 - 强调色 */
--color-immortal-dark: #1e293b;         /* 玄天黑 - 深色背景 */
--color-immortal-light: #f8fafc;        /* 云朵白 - 浅色背景 */

/* 功能色 */
--color-success: #10b981;               /* 成功 - 突破境界 */
--color-warning: #f59e0b;               /* 警告 - 危险提示 */
--color-error: #ef4444;                 /* 错误 - 修炼失败 */
--color-info: #3b82f6;                  /* 信息 - 功法说明 */
```

### 渐变系统
```css
/* 背景渐变 */
--gradient-immortal: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%);
--gradient-dark: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
--gradient-card: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);

/* 文字渐变 */
--gradient-text: linear-gradient(90deg, #0ea5e9, #8b5cf6);
```

## 📐 间距系统 (8px基准)
```css
--space-1: 0.25rem;   /* 2px */
--space-2: 0.5rem;    /* 4px */
--space-3: 0.75rem;   /* 6px */
--space-4: 1rem;      /* 8px */
--space-6: 1.5rem;    /* 12px */
--space-8: 2rem;      /* 16px */
--space-12: 3rem;     /* 24px */
--space-16: 4rem;     /* 32px */
--space-24: 6rem;     /* 48px */
--space-32: 8rem;     /* 64px */
```

## 🔤 字体系统

### 字体栈
```css
--font-sans: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
--font-serif: 'Noto Serif SC', 'Source Han Serif SC', serif;
--font-mono: 'JetBrains Mono', 'Cascadia Code', monospace;
```

### 字号层级
```css
--text-xs: 0.75rem;    /* 12px - 辅助文字 */
--text-sm: 0.875rem;   /* 14px - 正文小 */
--text-base: 1rem;     /* 16px - 正文 */
--text-lg: 1.125rem;   /* 18px - 小标题 */
--text-xl: 1.25rem;    /* 20px - 标题 */
--text-2xl: 1.5rem;    /* 24px - 大标题 */
--text-3xl: 1.875rem;  /* 30px - 页面标题 */
--text-4xl: 2.25rem;   /* 36px - 英雄标题 */
```

## 🎭 圆角系统
```css
--radius-sm: 0.25rem;   /* 4px - 按钮、输入框 */
--radius-md: 0.5rem;    /* 8px - 卡片 */
--radius-lg: 1rem;      /* 16px - 大卡片、模态框 */
--radius-xl: 1.5rem;    /* 24px - 特殊元素 */
--radius-full: 9999px;  /* 圆形元素 */
```

## 🌈 阴影系统
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-immortal: 0 10px 30px -5px rgba(14, 165, 233, 0.3);
```

## 🧩 组件规范

### 按钮 (Button)
```css
/* 主按钮 */
.btn-primary {
  background: var(--gradient-immortal);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: 600;
  box-shadow: var(--shadow-md);
  transition: all 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* 次要按钮 */
.btn-secondary {
  background: white;
  color: var(--color-immortal-primary);
  border: 2px solid var(--color-immortal-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all 0.2s ease;
}
```

### 卡片 (Card)
```css
.card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-immortal-primary);
}

/* 特殊卡片 - 仙侠风格 */
.card-immortal {
  background: var(--gradient-card);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
}

.card-immortal::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: var(--gradient-immortal);
  border-radius: inherit;
  z-index: -1;
}
```

### 导航栏 (Navbar)
```css
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  padding: var(--space-4) var(--space-8);
}

.nav-link {
  color: var(--color-immortal-dark);
  font-weight: 500;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--color-immortal-primary);
  background: rgba(14, 165, 233, 0.1);
}

.nav-link.active {
  color: var(--color-immortal-primary);
  background: rgba(14, 165, 233, 0.1);
  font-weight: 600;
}
```

## 📱 响应式断点
```css
/* 移动端优先 */
--breakpoint-sm: 640px;   /* 平板竖屏 */
--breakpoint-md: 768px;   /* 平板横屏 */
--breakpoint-lg: 1024px;  /* 小桌面 */
--breakpoint-xl: 1280px;  /* 桌面 */
--breakpoint-2xl: 1536px; /* 大桌面 */
```

## 🎯 动画系统
```css
/* 过渡时间 */
--transition-fast: 150ms;
--transition-normal: 300ms;
--transition-slow: 500ms;

/* 缓动函数 */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* 关键动画 */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.5); }
  50% { box-shadow: 0 0 40px rgba(14, 165, 233, 0.8); }
}
```

## ♿ 可访问性规范
- 所有交互元素必须有焦点状态
- 颜色对比度至少 4.5:1 (WCAG AA)
- 图片必须有alt文本
- 表单必须有标签和错误提示
- 支持键盘导航
- 支持屏幕阅读器

## 🎭 主题变量 (支持暗色模式)
```css
:root {
  /* 亮色主题 */
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e5e7eb;
}

[data-theme="dark"] {
  /* 暗色主题 */
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --border-color: #334155;
}
```

---

## 🚀 实施计划

### 第一阶段：基础样式重构
1. 更新全局CSS变量
2. 创建基础组件样式
3. 实现响应式布局系统

### 第二阶段：页面重构
1. 首页重设计 - 英雄区域+功能展示
2. 导航系统升级 - 现代化导航栏
3. 卡片设计 - 统一的数据展示卡片
4. 搜索界面优化 - 更好的搜索体验

### 第三阶段：高级功能
1. 暗色模式支持
2. 动画和微交互
3. 性能优化
4. 可访问性完善

### 第四阶段：品牌强化
1. 自定义图标系统
2. 加载状态设计
3. 错误页面设计
4. 404页面设计
