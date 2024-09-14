<script setup lang="ts">
import { computed } from "vue";
import IconPerson from "./icons/IconPerson.vue";

const peopleInput = defineModel<number | "">({
  required: true,
});
const peopleInvalid = computed(() => {
  if (peopleInput.value === "") return "";
  if (peopleInput.value < 0) return "Can't be negative";
  if (!Number.isInteger(peopleInput.value)) return "Must be whole";
  return "";
});
</script>

<template>
  <div>
    <!-- For the below, set bprder-2 at transparent so when it's focused it doesn't actually shift the layout a tiny bit. -->
    <div class="flex flex-col justify-center sm:flex-row sm:justify-between">
      <label for="no-people">Number of People</label>
      <span class="text-primary-red" :class="{ invisible: !peopleInvalid }">
        {{ peopleInvalid }}
      </span>
    </div>
    <div
      class="flex h-12 w-full flex-row items-center justify-between gap-4 rounded-md border-2 border-transparent bg-neutral-lighter-gray-cyan px-4 text-2xl has-[:focus]:border-primary-cyan"
      :class="{
        'border-primary-red has-[:focus]:border-primary-red': peopleInvalid,
      }"
    >
      <IconPerson />
      <input
        id="no-people"
        class="h-full w-full bg-transparent text-right outline-none placeholder:text-neutral-dark-cyan placeholder:opacity-35"
        type="number"
        inputmode="numeric"
        placeholder="0"
        v-model="peopleInput"
      />
    </div>
  </div>
</template>
