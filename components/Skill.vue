<script setup lang="ts">
type Props = {
  icon: string
  tooltip: string
}
defineProps<Props> ()
</script>

<template>
  <div
    class="relative flex items-center group transition-shadow justify-center bg-gray-600 rounded h-12 w-12 group-hover:shadow-amber-50 ease-in-out hover:scale-125 hover:bg-indigo-500 duration-200"
  >
    <div class="absolute -top-10 bg-indigo-500 py-1 px-2 rounded text-sm -translate-y-10 pointer-events-none transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 flex w-20 justify-center group-hover:-translate-y-0">
      {{ tooltip }}
    </div>
    <svg
      class="color"
      xmlns="http://www.w3.org/2000/svg"
      height="35"
      width="35"
    >
      <image
        :href="icon"
        height="35"
        width="35"
      />
    </svg>
  </div>
</template>

<style>
.color {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(237deg) brightness(106%) contrast(108%)
}
</style>
