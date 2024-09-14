<script setup lang="ts">
defineProps<{
  percent: number;
  active: number;
  customTip: number | "";
}>();

defineEmits<{
  select: [];
}>();
</script>

<template>
  <button
    class="hover:bg-neutral-bright-cyan h-12 w-full rounded-md bg-neutral-dark-cyan hover:text-neutral-dark-cyan"
    :class="{
      'bg-primary-cyan text-neutral-dark-cyan':
        active === percent && customTip === '',
    }"
    @click="$emit('select')"
  >
    {{ percent }}%
  </button>
</template>
