<template>
  <section class="page-hero">
    <h1 class="text-h3 font-weight-bold mb-3">{{ title }}</h1>
    <p v-if="subtitle" class="text-body-1 text-medium-emphasis mb-0">{{ subtitle }}</p>
    <div v-if="$slots.actions" class="mt-6 d-flex ga-3 flex-wrap">
      <slot name="actions" />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<style scoped>
.page-hero {
  border-radius: 18px;
  padding: 28px;
  background: linear-gradient(
    130deg,
    rgba(var(--v-theme-primary), 0.1),
    rgba(var(--v-theme-surface), 0.9)
  );
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

@media (max-width: 600px) {
  .page-hero {
    padding: 20px;
  }
}
</style>
