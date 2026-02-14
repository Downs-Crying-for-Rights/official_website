# DCR 学生互助频道官网

本仓库包含 DCR 学生互助频道官方网站的源代码，采用 [Vuetify](https://vuetifyjs.com/) 框架进行界面设计与功能实现，旨在提升用户体验及网站性能。

## 开发环境搭建

### 环境要求

- **Node.js**：建议使用 Node.js 24 及以上版本。可使用 [nvm](https://github.com/nvm-sh/nvm) 管理版本。
- **pnpm**：本项目使用 pnpm 管理依赖。

### 安装依赖

```sh
pnpm install
```

运行开发服务器：

```sh
pnpm run dev
```

在浏览器中打开控制台给出的本地地址即可预览开发中的网站。

### 构建生产版本

```sh
pnpm run build
```

构建产物位于 `dist/` 目录，适合部署到生产环境。

## 贡献指南

在提交 Pull Request 前，请先创建 Issue 进行讨论并确保代码风格一致。每个 Pull Request 应只包含一个功能或修复。

提交前请运行：

```sh
pnpm run format
```

## 许可证

本项目遵循 MIT 许可证。欢迎贡献与使用。
