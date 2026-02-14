<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, index) in items" :key="index">
      <v-expansion-panel-title>{{ item.question }}</v-expansion-panel-title>
      <v-expansion-panel-text>{{ item.answer }}</v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    question: string;
    answer: string;
  }>;
}>();
</script>
