<script setup lang="ts">
type Props = {
  company: string
  role: string
  startDate: string
  endDate?: string
  description: string
}
defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex text-xl justify-between">
      <strong>{{ company }} - {{ role }}</strong>
      <span>{{ startDate }} - {{ endDate ?? 'Present' }}</span>
    </div>
    <span>{{ description }}</span>
  </div>
</template>
