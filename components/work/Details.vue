<script setup lang="ts">
import listToString from '../../utils/listToString'

type Props = {
  company: string
  role: string
  startDate: string
  endDate?: string
  description: string
  stack?: string[]
  tools?: string[]
  location: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-5">
    <Experience
      :role
      :company
      :location
      :start-date
      :end-date
    />
    <span class="break-words text-pretty whitespace-pre-line">{{ description }}</span>
    <div class="flex flex-col">
      <div
        v-if="stack"
        class="flex gap-1"
      >
        <span class="font-semibold">Stack:</span>
        <span>{{ listToString(stack) }}</span>
      </div>
      <div
        v-if="tools"
        class="flex gap-1"
      >
        <span class="font-semibold">Tools:</span>
        <span>{{ listToString(tools) }}</span>
      </div>
    </div>
  </div>
</template>
