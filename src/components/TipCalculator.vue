<script setup lang="ts">
import { ref } from "vue";
import BillInput from "./BillInput.vue";
import TipInput from "./TipInput.vue";
import PeopleInput from "./PeopleInput.vue";
import OutputPanel from "./OutputPanel.vue";

const bill = ref("");
const tipPercent = ref("");
const customTip = ref("");
const people = ref("");

function selectTip(percent: string) {
  tipPercent.value = percent;
  customTip.value = ""; // Reset the custom tip when a preset is selected.
}
</script>

<template>
  <div
    class="flex flex-col gap-8 rounded-t-3xl bg-white p-8 text-neutral-dark-gray-cyan"
  >
    <BillInput v-model="bill" />
    <TipInput :active="tipPercent" @select="selectTip" v-model="customTip" />
    <PeopleInput v-model="people" />
    <OutputPanel :bill :tipPercent :customTip :people />
  </div>
</template>
