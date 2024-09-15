<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  bill: number | "";
  tipPercent: number;
  customTip: number | "";
  people: number | "";
}>();

defineEmits<{
  reset: [];
}>();

function chooseTipPercent(): number {
  return props.customTip === "" ? props.tipPercent : props.customTip;
}

const error = computed(() => {
  // If bill or people is NaN, return true.
  // Both bill and people must be numbers, and people must be greater than 0 (bill can be $0 tho).
  if (
    props.bill === "" ||
    props.people === "" ||
    props.bill < 0 ||
    props.people <= 0
  ) {
    return true;
  }

  // If people is a floting point number, return ERROR.
  if (!Number.isInteger(props.people)) {
    return true;
  }

  // If none of the above conditions are met, return false.
  return false;
});

const result = computed(() => {
  if (error.value) {
    return {
      tipPer: "0.00",
      totalPer: "0.00",
    };
  }

  const bill = props.bill as number;
  const people = props.people as number;

  const tipPercent = chooseTipPercent();
  const tipAmount = bill * (tipPercent / 100);
  const totalAmount = bill + tipAmount;

  return {
    tipPer: (tipAmount / people).toFixed(2),
    totalPer: (totalAmount / people).toFixed(2),
  };
});

// The reset button should be disabled if no input has been entered.
const resetDisabled = computed(() => {
  return (
    props.bill === "" &&
    props.tipPercent === 0 &&
    props.customTip === "" &&
    props.people === ""
  );
});
</script>

<template>
  <div
    class="flex w-full flex-col justify-between gap-8 rounded-2xl bg-neutral-dark-cyan p-6 pt-10"
  >
    <div class="flex flex-col gap-7">
      <div class="flex flex-row items-center justify-between">
        <div class="flex h-full flex-col">
          <span class="text-white">Tip Amount</span>
          <span class="text-sm text-neutral-gray-cyan">/ person</span>
        </div>

        <span class="text-[2rem] text-primary-cyan lg:text-5xl">
          {{ `$${result.tipPer}` }}
        </span>
      </div>

      <div class="flex flex-row items-center justify-between">
        <div class="flex h-full flex-col">
          <span class="text-white">Total</span>
          <span class="text-sm text-neutral-gray-cyan">/ person</span>
        </div>

        <span class="text-[2rem] text-primary-cyan lg:text-5xl">
          {{ `$${result.totalPer}` }}
        </span>
      </div>
    </div>

    <button
      class="disabled:bg-neutral-disabled-cyan h-12 w-full rounded-md bg-primary-cyan text-center text-xl text-neutral-dark-cyan hover:bg-neutral-bright-cyan disabled:cursor-not-allowed disabled:hover:transition-none"
      :disabled="resetDisabled"
      @click.prevent="$emit('reset')"
    >
      RESET
    </button>
  </div>
</template>
