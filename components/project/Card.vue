<script setup lang="ts">
type Props = {
  thumbnail: string
  name: string
  description: string
  stack: string[]
  url: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center text-white rounded-2xl bg-indigo-500/40 w-full p-6 gap-6">
    <div class="flex w-full h-full gap-6">
      <img
        class="h-32 max-w-40 rounded-xl"
        :src="thumbnail"
        alt="thumbnail"
      >
      <div class="flex flex-col justify-between text-white">
        <span class="font-bold underline text-2xl">{{ name }}:</span>
        <div class="whitespace-pre-line">
          {{ description }}
        </div>
        <div><strong>Stack: </strong>{{ listToString(stack) }}</div>
      </div>
    </div>
    <Button
      label="About"
      type="icon-label"
      icon="fas fa-arrow-up-right-from-square"
      :navigate-to="url"
      external
    />
  </div>
</template>
