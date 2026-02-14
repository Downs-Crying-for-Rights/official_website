<template>
  <v-timeline-item :dot-color="step.color" size="large" class="timeline-step-item">
    <template #icon>
      <v-icon :icon="step.icon" />
    </template>
    <template #opposite>
      <div class="text-subtitle-1 font-weight-bold">步骤 {{ index + 1 }}</div>
    </template>

    <v-card class="timeline-step-card" border>
      <v-card-title class="text-h6">{{ step.title }}</v-card-title>
      <v-card-text>
        <p class="text-body-1 mb-4">{{ step.description }}</p>

        <v-list v-if="step.details?.length" density="compact" class="rounded-lg step-detail-list">
          <v-list-item v-for="(detail, i) in step.details" :key="i" :prepend-icon="detail.icon">
            <v-list-item-title>{{ detail.text }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-btn
          v-if="step.action"
          :color="step.color"
          :to="step.action.to"
          :href="step.action.href"
          :target="step.action.href ? '_blank' : undefined"
          class="mt-4"
        >
          {{ step.action.text }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script setup lang="ts">
import type { IProcessStep } from '@/interfaces/IProcessStep';

defineProps<{
  step: IProcessStep;
  index: number;
}>();
</script>

<style scoped>
.timeline-step-card {
  border-radius: 16px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.timeline-step-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}

.step-detail-list {
  background: rgba(var(--v-theme-primary), 0.04);
}
</style>
