/**
 * plugins/vuetify.ts
 *
 * 框架文档：https://vuetifyjs.com`
 */

// 样式
// 导入Material Design Icons字体样式
import '@mdi/font/css/materialdesignicons.css';
// 导入Vuetify样式
import 'vuetify/styles';

// 可组合功能
// 从'vuetify'导入创建Vuetify的函数
import { createVuetify } from 'vuetify';

// 查看Vuetify的特性指南：https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// 创建并配置Vuetify实例
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#2E7D32', // 深绿色
          secondary: '#388E3C', // 中绿色
          accent: '#43A047', // 鲜绿色
          success: '#2E7D32',
          info: '#00796B', // 深青色
          warning: '#F57C00', // 深橙色
          error: '#EF5350',
          background: '#FAFAFA', // 浅灰背景
          surface: '#FFFFFF'
        }
      }
    }
  }
});
