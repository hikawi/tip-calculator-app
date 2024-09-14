<script setup lang="ts">
defineProps<{
  percent: string;
  active: string;
  customTip: string;
}>();

defineEmits<{
  select: [];
}>();
</script>

<template>
  <button
    class="h-12 w-full rounded-md bg-neutral-dark-cyan hover:bg-primary-cyan hover:text-neutral-dark-cyan"
    :class="{
      'bg-primary-cyan text-neutral-dark-cyan':
        active === percent && customTip == '',
    }"
    @click="$emit('select')"
  >
    {{ percent }}%
  </button>
</template>
