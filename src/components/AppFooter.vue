<template>
  <v-footer height="auto" app class="d-flex flex-wrap ga-4 px-4">
    <div class="text-caption text-disabled" style="">
      &copy; 2023-{{ new Date().getFullYear() }}
      <span class="">DCR 学生互助频道</span>
    </div>
    <div class="text-caption text-disabled" style="">
      DCR 是该频道的代号，其内容并不代表任何法人实体
    </div>
    <a href="/disclaimer" class="text-caption text-disabled"> 免责声明 </a>
    <a
      href="https://cloud.dcr.smart-teach.cn"
      target="_blank"
      rel="noopener noreferrer"
      class="text-caption text-disabled"
    >
      文档下载站
    </a>

    <div class="d-flex flex-row-reverse flex-grow-1">
      <a
        v-for="item in items"
        :key="item.title"
        :href="item.href"
        :title="item.title"
        class="d-inline-block mx-2 social-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        <v-icon :icon="item.icon" :size="item.icon === '$vuetify' ? 24 : 16" />
      </a>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const items = [
  {
    title: '联系我们',
    icon: 'mdi-email-outline',
    href: 'mailto:contact@xshzpd.mysxl.cn'
  },
  {
    title: '反馈表',
    icon: `mdi-message-text-outline`,
    href: 'https://1kxfhpte.jsjform.com/f/TMcGoz'
  }
];
</script>

<style scoped lang="sass">

.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(76, 175, 80, 1)
</style>
