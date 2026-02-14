<template>
  <v-card variant="outlined" class="service-card" :href="url" target="_blank">
    <v-card-item>
      <v-avatar v-if="icon" size="48" class="mb-2">
        <v-img :src="icon" />
      </v-avatar>
      <v-icon v-else :icon="defaultIcon" size="large" />
    </v-card-item>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle v-if="author">{{ author }}</v-card-subtitle>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  author?: string;
  description: string;
  icon?: string;
  defaultIcon?: string;
  url?: string;
}>();
</script>

<style scoped>
.service-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
