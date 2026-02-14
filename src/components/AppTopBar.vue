<template>
  <v-app-bar class="pr-4 position-fixed">
    <div class="ml-2 align-content-center d-flex">
      <div class="d-flex flex-row align-center">
        <v-app-bar-nav-icon
          variant="text"
          class="nav-icon"
          @click="isNavDrawerOpen = !isNavDrawerOpen"
        />
        <RouterLink
          to="/"
          class="text-decoration-none"
          style="color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))"
        >
          <v-app-bar-title class="align-content-center mx-2"> DCR 学生互助频道 </v-app-bar-title>
        </RouterLink>
      </div>
      <div class="app-bar-tabs">
        <v-tabs color="green">
          <v-tab
            v-for="i in navItems"
            v-bind:key="i.title"
            :append-icon="i.href ? 'mdi-open-in-new' : ''"
            :to="i.to"
            :href="i.href"
            :target="i.href ? '_blank' : ''"
          >
            {{ i.title }}
          </v-tab>
        </v-tabs>
      </div>
    </div>

    <template v-slot:append>
      <div class="d-flex align-center ga-2">
        <!-- 主题切换按钮 -->
        <v-btn
          icon
          variant="text"
          @click="toggleTheme"
          :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
        >
          <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
        <v-btn small variant="flat" color="green" to="/form" prepend-icon="mdi-file-document-edit"
          >填写委托表</v-btn
        >
      </div>
    </template>
  </v-app-bar>

  <v-navigation-drawer class="position-fixed" v-model="isNavDrawerOpen" temporary>
    <v-list>
      <v-list-item
        v-for="i in navItems"
        v-bind:key="i.title"
        :append-icon="i.href ? 'mdi-open-in-new' : ''"
        :to="i.to"
        :href="i.href"
        :target="i.href ? '_blank' : ''"
        :prepend-icon="i.icon"
      >
        {{ i.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>
.app-bar-tabs {
  @media (max-width: 750px) {
    display: none;
  }
}

.nav-icon {
  @media (min-width: 750px) {
    display: none;
  }
}
</style>

<script setup>
import { useTheme } from 'vuetify';
import { ref, computed, onMounted, onUnmounted } from 'vue';

const isNavDrawerOpen = ref(false);
const theme = useTheme();

// 计算当前是否为深色模式
const isDark = computed(() => theme.global.current.value.dark);

// 切换主题
const toggleTheme = () => {
  const newTheme = isDark.value ? 'light' : 'dark';
  theme.global.name.value = newTheme;
  // 保存用户偏好到localStorage
  localStorage.setItem('theme', newTheme);
};

// 组件挂载时，检测并应用用户的主题偏好
onMounted(() => {
  // 优先使用用户保存的偏好
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    theme.global.name.value = savedTheme;
  } else {
    // 如果没有保存的偏好，则检测系统主题
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme.global.name.value = prefersDark ? 'dark' : 'light';
  }

  // 监听系统主题变化（仅当用户没有手动设置偏好时）
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleThemeChange = (e) => {
    // 只有在没有用户保存的偏好时才自动切换
    if (!localStorage.getItem('theme')) {
      theme.global.name.value = e.matches ? 'dark' : 'light';
    }
  };

  mediaQuery.addEventListener('change', handleThemeChange);

  // 组件卸载时清理监听器
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleThemeChange);
  });
});

const navItems = [
  {
    icon: 'mdi-home',
    title: '首页',
    to: '/'
  },
  {
    icon: 'mdi-account-group',
    title: '平台简介',
    to: '/about'
  },
  {
    icon: 'mdi-book-open-variant',
    title: '互助流程',
    to: '/process'
  },
  {
    icon: 'mdi-file-document-edit',
    title: '委托表工具',
    to: '/form'
  },
  {
    icon: 'mdi-download',
    title: '教程与下载',
    href: 'https://cloud.dcr.smart-teach.cn'
  },
  {
    icon: 'mdi-heart',
    title: '心理支持',
    to: '/support'
  },
  {
    icon: 'mdi-help-circle',
    title: '常见问题',
    to: '/faq'
  },
  {
    icon: 'mdi-shield-alert',
    title: '免责声明',
    to: '/disclaimer'
  }
];
</script>
