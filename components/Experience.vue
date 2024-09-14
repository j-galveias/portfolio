<script setup lang="ts">
type Props = {
  company: string
  role: string
  startDate: string
  endDate?: string
  location: string
}
const props = defineProps<Props>()

const roleEndDate = computed(() => props.endDate ?? 'Present')
</script>

<template>
  <div class="flex flex-col">
    <div class="flex text-xl justify-between">
      <span class="font-semibold">{{ role }}</span>
      <span>{{ location }}</span>
    </div>
    <div class="flex text-xl justify-between italic font-light">
      <span>{{ company }}</span>
      <span>{{ startDate }} - {{ roleEndDate }}</span>
    </div>
  </div>
</template>
