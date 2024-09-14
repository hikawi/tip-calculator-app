<script setup lang="ts">
import TipPresetButton from "./TipPresetButton.vue";

// We use strings here because the input type is "number" and we want to allow empty strings
// to show placeholders in the input field.
defineProps<{
  active: string;
}>();

defineEmits<{
  select: [percent: string];
}>();

const customTip = defineModel<string>({
  required: true,
});
</script>

<template>
  <fieldset>
    <legend class="mb-4">Select Tip %</legend>
    <div
      class="grid grid-cols-2 gap-4 text-center text-2xl text-white lg:grid-cols-3"
    >
      <TipPresetButton
        v-for="percent in ['5', '10', '15', '25', '50']"
        :key="percent"
        :percent
        :active
        :customTip
        @select="$emit('select', percent)"
      />
      <input
        type="number"
        placeholder="Custom"
        class="rounded-md border-2 border-transparent bg-neutral-lighter-gray-cyan px-4 text-right text-neutral-dark-cyan outline-none placeholder:text-neutral-dark-gray-cyan focus:border-primary-cyan"
        v-model="customTip"
        :class="{ 'border-primary-cyan': customTip !== '' }"
      />
    </div>
  </fieldset>
</template>
