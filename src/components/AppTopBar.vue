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
      <div class="ga-4">
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
const isNavDrawerOpen = ref(false);

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
