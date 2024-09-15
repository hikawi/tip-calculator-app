<script setup lang="ts">
import { ref } from "vue";
import BillInput from "./BillInput.vue";
import TipInput from "./TipInput.vue";
import PeopleInput from "./PeopleInput.vue";
import OutputPanel from "./OutputPanel.vue";

// We need number datatypes, but also need to allow for empty strings.
const bill = ref<number | "">("");
const tipPercent = ref<number>(0);
const customTip = ref<number | "">("");
const people = ref<number | "">("");

function selectTip(percent: number) {
  tipPercent.value = percent;
  customTip.value = ""; // Reset the custom tip when a preset is selected.
}

function reset() {
  bill.value = "";
  tipPercent.value = 0;
  customTip.value = "";
  people.value = "";
}
</script>

<template>
  <div
    class="flex flex-col gap-8 rounded-none rounded-t-3xl bg-white p-8 text-neutral-dark-gray-cyan shadow-lg lg:w-[57.5rem] lg:flex-row lg:gap-12 lg:rounded-3xl lg:p-12"
  >
    <div class="flex w-full flex-col gap-8">
      <BillInput v-model="bill" />
      <TipInput :active="tipPercent" @select="selectTip" v-model="customTip" />
      <PeopleInput v-model="people" />
    </div>
    <OutputPanel :bill :tipPercent :customTip :people @reset="reset" />
  </div>
</template>
