/**
 * 主入口文件
 *
 * 本文件负责初始化Vue应用，包括安装必要的插件和挂载根组件。
 */

// 导入插件注册逻辑
// Plugins
import { registerPlugins } from '@/plugins';

// 导入App组件
// Components
import App from './App.vue';

//导入虚拟模块以注册SVG图标
import 'virtual:svg-icons-register';

import './styles/main.scss';
import { ViteSSG } from 'vite-ssg';
import { routes } from 'vue-router/auto-routes';
import chalk from 'chalk';

const asciiLogo =
  '---------------------------------------------------------------\n' +
  '  ____   ____  ____    学生互助频道\n' +
  ' |  _ \\ / ___||  _ \\   DCR - Student Help Channel\n' +
  ' | | | | |    | |_) |  温暖 · 免费 · 专业 · 易用\n' +
  ' | |_| | |___ |  _ <   \n' +
  ' |____/ \\____||_| \\_\\  \n' +
  '---------------------------------------------------------------\n' +
  'DCR 学生互助频道 —— 为学生提供无偿互助服务的温暖平台\n';

// 创建Vue应用实例，指定根组件为App
export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, isClient }) => {
    // 在这里使用例如 app.use(pinia) 或者 router.use()
    registerPlugins(app);
    if (isClient) {
      // Sentry 已禁用 - 如需启用请配置 DSN
      // import * as Sentry from '@sentry/vue';
      // Sentry.init({
      //   app,
      //   dsn: "YOUR_DSN_HERE",
      //   integrations: [
      //     Sentry.browserTracingIntegration({ router }),
      //     Sentry.replayIntegration(),
      //   ],
      //   tracesSampleRate: 0.1,
      //   tracePropagationTargets: ["localhost", /^https:\/\/xshzpd\.mysxl\.cn/],
      //   replaysSessionSampleRate: 0.1,
      //   replaysOnErrorSampleRate: 1.0,
      // });

      console.log(
        chalk.hex('#00bfff')(asciiLogo) +
          '\n' +
          chalk.hex('#FF9AFC')('⌈收费不存在 · 互助永相伴⌋') +
          '\n' +
          chalk.hex('#81ddff')('⌈愿每一位学生都能勇敢发声，维护自己的权益⌋')
      );
    }
  }
);
