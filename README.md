# Guazi About Page

高端的 Guazi 公司 About 页面，使用 Next.js 14、React 18、TypeScript 和 Tailwind CSS 构建。

## 技术栈

- **Next.js 14** - React 框架
- **React 18** - UI 库
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Lucide React** - 图标库
- **Framer Motion** - 动画库

## 设计特点

- 主色调：#009B3F（瓜子绿）
- 高端设计风格
- 响应式布局
- 流畅的动画效果
- 现代化 UI 组件

## 页面板块

1. **视频 + 公司简介** - 顶部视频背景和公司介绍
2. **实力量化** - 全球规模数据展示
3. **投资关系** - 投资方信息
4. **品牌差异化卖点** - 端到端解决方案
5. **业务模块介绍** - 采购模式
6. **国际声量** - 全球足迹
7. **资质认证** - 证书展示
8. **客户证言** - 合作伙伴评价
9. **团队展示** - 区域专家介绍
10. **FAQ** - 常见问题
11. **联系表单** - 合作咨询

## 安装

```bash
npm install
```

## 运行

开发模式：
```bash
npm run dev
```

生产构建：
```bash
npm run build
npm start
```

## 访问

开发服务器运行后，访问：
- About 页面: http://localhost:3000/about

## 项目结构

```
├── app/
│   ├── about/
│   │   └── page.tsx          # About 页面
│   ├── globals.css            # 全局样式
│   └── layout.tsx             # 根布局
├── components/
│   └── sections/              # 页面板块组件
│       ├── HeroSection.tsx
│       ├── GlobalScale.tsx
│       ├── FinancialBacking.tsx
│       ├── EndToEndSolutions.tsx
│       ├── ProcurementModels.tsx
│       ├── GlobalFootprint.tsx
│       ├── Certifications.tsx
│       ├── Testimonials.tsx
│       ├── TeamSection.tsx
│       ├── FAQ.tsx
│       └── ContactForm.tsx
├── public/
│   ├── videos/                # 视频资源
│   └── images/                # 图片资源
└── tailwind.config.ts         # Tailwind 配置
```

## 注意事项

1. 需要在 `public/videos/` 目录下添加 `hero-video.mp4` 视频文件
2. 需要在 `public/images/investors/` 目录下添加投资方 logo 图片
3. 需要在 `public/images/certs/` 目录下添加证书图片
4. WhatsApp 链接需要更新为实际的联系号码

## 自定义

- 主色调可在 `tailwind.config.ts` 中修改
- 内容文案可在各个组件文件中修改
- 动画效果可在 `tailwind.config.ts` 中调整
