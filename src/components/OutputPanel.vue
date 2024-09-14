<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  bill: string;
  tipPercent: string;
  customTip: string;
  people: string;
}>();

function chooseTipPercent(): number {
  const tip = parseFloat(props.tipPercent);
  const custom = parseFloat(props.customTip);
  return isNaN(custom) ? tip : custom;
}

const error = computed(() => {
  const bill = parseFloat(props.bill);
  const people = parseFloat(props.people);

  // If bill or people is NaN, return true.
  // Both bill and people must be numbers, and people must be greater than 0 (bill can be $0 tho).
  if (isNaN(bill) || isNaN(people) || bill < 0 || people <= 0) {
    return true;
  }

  // If chosen tip percent is NaN, return ERROR.
  if (isNaN(chooseTipPercent())) {
    return true;
  }

  // If people is a floting point number, return ERROR.
  if (!Number.isInteger(people)) {
    return true;
  }

  // If none of the above conditions are met, return false.
  return false;
});

const result = computed(() => {
  const bill = parseFloat(props.bill);
  const people = parseInt(props.people);

  if (error) {
    return {
      tipPer: 0,
      totalPer: 0,
    };
  }

  const tipPercent = chooseTipPercent();
  const tipAmount = bill * (tipPercent / 100);
  const totalAmount = bill + tipAmount;

  console.log(
    "Calculating bill",
    bill,
    "between",
    people,
    "people with a tip of",
    tipPercent,
    "percent to tipping",
    tipAmount,
    "and totaling",
    totalAmount,
  );

  return {
    tipPer: (tipAmount / people).toFixed(2),
    totalPer: (totalAmount / people).toFixed(2),
  };
});
</script>

<template>
  <div class="flex flex-col gap-7 rounded-2xl bg-neutral-dark-cyan p-6 pt-10">
    <div class="flex flex-row items-center justify-between">
      <div class="flex h-full flex-col">
        <span class="text-white">Tip Amount</span>
        <span class="text-sm text-neutral-gray-cyan">/ person</span>
      </div>

      <span class="text-[2rem] text-primary-cyan">
        {{ error ? "$0.00" : `$${result.tipPer}` }}
      </span>
    </div>

    <div class="flex flex-row items-center justify-between">
      <div class="flex h-full flex-col">
        <span class="text-white">Total</span>
        <span class="text-sm text-neutral-gray-cyan">/ person</span>
      </div>

      <span class="text-[2rem] text-primary-cyan">
        {{ error ? "$0.00" : `$${result.totalPer}` }}
      </span>
    </div>
  </div>
</template>
