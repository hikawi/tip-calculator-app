<script setup lang="ts">
import { computed } from "vue";
import IconDollar from "./icons/IconDollar.vue";

const billInput = defineModel<number | "">({
  required: true,
});
const billInvalid = computed(
  () => billInput.value !== "" && billInput.value < 0,
);
</script>

<template>
  <div>
    <!-- For the below, set bprder-2 at transparent so when it's focused it doesn't actually shift the layout a tiny bit. -->
    <div class="flex flex-row items-center justify-between">
      <label for="bill">Bill</label>
      <span
        :class="{
          invisible: !billInvalid,
          'text-primary-red': billInvalid,
        }"
      >
        Can't be negative
      </span>
    </div>
    <div
      class="flex h-12 w-full flex-row items-center justify-between gap-4 rounded-md border-2 border-transparent bg-neutral-lighter-gray-cyan px-4 text-2xl has-[:focus]:border-primary-cyan"
      :class="{
        'border-primary-red has-[:focus]:border-primary-red': billInvalid,
      }"
    >
      <IconDollar />
      <input
        id="bill"
        class="h-full w-full bg-transparent text-right outline-none placeholder:text-neutral-dark-cyan placeholder:opacity-35"
        type="number"
        required
        placeholder="0"
        inputmode="decimal"
        v-model="billInput"
      />
    </div>
  </div>
</template>
