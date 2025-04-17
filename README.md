# 社区服务平台

这是一个基于[Next.js](https://nextjs.org)开发的社区服务平台，旨在为社区居民提供便捷的信息获取和服务管理功能。

## 项目功能

- 社区公告管理
- 活动信息发布
- 服务请求处理
- 天气信息查询
- 用户档案管理

## 技术栈

- **前端框架**: Next.js 15
- **UI组件**: 原生组件
- **数据库**: Prisma ORM + PostgreSQL
- **API**: RESTful API
- **样式**: CSS Modules

## 数据库设计

项目使用Prisma作为ORM工具，主要数据模型包括：
- 用户信息
- 社区公告
- 活动信息
- 服务请求
- 天气数据

## 环境要求

- Node.js 18+
- PostgreSQL 17.4+
- pnpm

## 本地开发

1. 克隆项目并安装依赖：

```bash
git clone <repository-url>
cd community-service
pnpm install
```

2. 配置环境变量：
创建`.env`文件，添加必要的环境变量：
```
DATABASE_URL="mysql://user:password@localhost:3306/community"
```

3. 初始化数据库：
```bash
pnpm prisma migrate dev
pnpm prisma generate
```

4. 启动开发服务器：

```bash
pnpm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## API接口

### 公告相关
- `GET /api/announcements`: 获取公告列表
- `POST /api/announcements`: 创建新公告

### 活动相关
- `GET /api/activities`: 获取活动列表
- `POST /api/activities`: 创建新活动

### 服务相关
- `GET /api/services`: 获取服务列表
- `POST /api/services`: 提交服务请求

### 天气相关
- `GET /api/weather`: 获取天气信息

## 部署

本项目推荐使用[Vercel平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)进行部署。

1. 在Vercel上导入项目
2. 配置环境变量
3. 部署完成后即可访问

更多部署细节请参考[Next.js部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

## 贡献指南

欢迎提交Issue和Pull Request来帮助改进项目。

## 许可证

本项目采用MIT许可证。
