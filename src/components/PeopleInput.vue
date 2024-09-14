<script setup lang="ts">
import IconPerson from "./icons/IconPerson.vue";

const peopleInput = defineModel<string>({
  required: true,
});
</script>

<template>
  <div>
    <!-- For the below, set bprder-2 at transparent so when it's focused it doesn't actually shift the layout a tiny bit. -->
    <label for="no-people">Number of People</label>
    <div
      class="flex h-12 w-full flex-row items-center justify-between gap-4 rounded-md border-2 border-transparent bg-neutral-lighter-gray-cyan px-4 text-2xl has-[:focus]:border-primary-cyan"
    >
      <IconPerson />
      <input
        id="no-people"
        class="h-full w-full bg-transparent text-right outline-none placeholder:text-neutral-dark-cyan placeholder:opacity-35"
        type="number"
        placeholder="0"
        v-model="peopleInput"
      />
    </div>
  </div>
</template>
