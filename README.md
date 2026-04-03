# 《凡人修仙传》数据探索应用

一个基于Next.js的《凡人修仙传》数据探索Web应用，提供完整的角色、境界、时间线和门派数据查询功能。

## 🎯 项目特点

### 📊 全量数据支持
- **16个完整角色**：韩立、南宫婉、墨大夫、向之礼等
- **13个修仙境界**：炼气期、筑基期、金丹期、元婴期、化神期、炼虚期、合体期、大乘期、真仙境、金仙境、太乙境、大罗境、道祖境
- **30个时间线事件**：涵盖人界篇、灵界篇、仙界篇
- **10个门派势力**：黄枫谷、掩月宗、灵兽山、太真门、落云宗等

### 🔍 智能搜索系统
- **全文搜索**：支持关键词搜索所有数据类型
- **高级筛选**：按时代（人界篇/灵界篇/仙界篇）、实力、重要性筛选
- **相关性评分**：智能算法评估搜索结果相关性
- **搜索建议**：实时提供热门搜索建议
- **搜索分析**：显示搜索统计和分布

### 🎨 设计风格
- **青绿色调仙侠主题**：统一的视觉风格
- **响应式设计**：适配桌面和移动设备
- **简洁直观**：用户友好的界面设计

## 🚀 功能页面

### 1. 首页 (Home)
- 项目介绍和功能概览
- 快速导航到各功能页面

### 2. 世界观 (Worldview)
- 修仙境界体系展示
- 境界详情和特点说明

### 3. 人物 (Characters)
- 完整角色列表
- 角色详情（境界、门派、法宝、关系等）
- 按门派筛选人物

### 4. 时间线 (Timeline)
- 剧情事件时间线
- 按时代筛选事件
- 事件重要性标记

### 5. 门派 (Sects)
- 门派势力列表
- 门派实力评分
- 门派领袖和特色

### 6. 搜索 (Search)
- 全局智能搜索
- 高级筛选功能
- 搜索结果详情展示

## 🛠️ 技术栈

- **前端框架**：Next.js 13.5.6
- **开发语言**：TypeScript
- **样式方案**：Tailwind CSS + 内联样式
- **数据管理**：TypeScript接口 + 本地数据文件
- **构建工具**：Next.js内置构建系统

## 📁 项目结构

```
fanren-webapp/
├── frontend/
│   ├── pages/              # 页面组件
│   │   ├── index.tsx       # 首页
│   │   ├── worldview.tsx   # 世界观页面
│   │   ├── characters.tsx  # 人物页面
│   │   ├── timeline.tsx    # 时间线页面
│   │   ├── sects.tsx       # 门派页面
│   │   └── search.tsx      # 搜索页面
│   ├── data/              # 数据文件
│   │   ├── characters.ts   # 人物数据
│   │   ├── cultivationLevels.ts # 境界数据
│   │   ├── timelineEvents.ts    # 时间线数据
│   │   └── search.ts       # 搜索工具函数
│   ├── styles/            # 样式文件
│   │   └── globals.css    # 全局样式
│   └── package.json       # 依赖配置
└── README.md             # 项目说明
```

## 🔧 开发指南

### 环境要求
- Node.js 18+ 
- npm 或 yarn

### 安装依赖
```bash
cd frontend
npm install
```

### 开发运行
```bash
cd frontend
npm run dev
```
访问 http://localhost:3000

### 构建生产版本
```bash
cd frontend
npm run build
npm start
```

## 📈 数据模型

### 人物 (Character)
```typescript
interface Character {
  id: string;
  name: string;
  aliases: string[];
  cultivationLevel: string;
  sect: string;
  description: string;
  importantEvents: string[];
  treasures: string[];
  relationships: CharacterRelationship[];
}
```

### 修仙境界 (CultivationLevel)
```typescript
interface CultivationLevel {
  id: string;
  name: string;
  order: number;
  description: string;
  lifespan: string;
  abilities: string[];
  keyFeatures: string[];
  examples: string[];
  difficulty: number;
  typicalTime: string;
}
```

### 时间线事件 (TimelineEvent)
```typescript
interface TimelineEvent {
  id: string;
  title: string;
  time: string;
  age?: number;
  location: string;
  description: string;
  importance: number;
  characters: string[];
  tags: string[];
  era: '人界篇' | '灵界篇' | '仙界篇';
}
```

### 门派 (Sect)
```typescript
interface Sect {
  id: string;
  name: string;
  region: string;
  strength: number;
  description: string;
  leader?: string;
  foundingTime?: string;
  speciality?: string;
}
```

## 🔍 搜索功能

### 搜索类型
- 人物搜索：按名称、境界、门派、法宝等
- 境界搜索：按名称、能力、特点等
- 事件搜索：按标题、地点、人物、时代等
- 门派搜索：按名称、地区、实力等

### 高级功能
- 相关性评分（0-100）
- 按时代筛选（人界篇/灵界篇/仙界篇）
- 按实力/重要性筛选
- 搜索建议和热门搜索
- 搜索统计和分析

## 🎨 设计规范

### 颜色主题
- 主色调：青绿色 (#0ea5e9)
- 背景色：浅灰色 (#f9fafb)
- 文字色：深灰色 (#1f2937)
- 强调色：蓝色 (#3b82f6)

### 响应式断点
- 移动端：< 768px
- 平板端：768px - 1024px
- 桌面端：> 1024px

## 📝 开发记录

### 已完成功能
- [x] 5个完整功能页面
- [x] 全量数据扩展（16角色/13境界/30事件/10门派）
- [x] 智能搜索系统
- [x] TypeScript类型安全
- [x] 响应式设计
- [x] 青绿色调主题

### 未来优化方向
- [ ] 数据可视化图表
- [ ] 用户交互功能（收藏、评论）
- [ ] 性能优化（懒加载、代码分割）
- [ ] 移动端体验优化
- [ ] 部署到Vercel等平台

## 📄 许可证

MIT License

## 🙏 致谢

- 《凡人修仙传》作者：忘语
- 数据基于公开资源整理
- 设计灵感来源于传统仙侠文化

---

**项目状态**：✅ 功能完整，数据丰富，可部署使用

**最后更新**：2026年3月31日