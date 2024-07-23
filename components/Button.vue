<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

type Props = {
  label?: string
  navigateTo?: string
  type: ButtonType
  icon?: string
}

const props = defineProps<Props>()

async function navigate() {
  await navigateTo(props.navigateTo, {
    external: true,
    open: {
      target: '_blank',
    },
  })
}
</script>

<template>
  <div
      class="flex justify-center items-center text-white cursor-pointer select-none"
      :class="type !== 'icon'
      ? 'gap-2 bg-gray-800 rounded-xl h-16 w-32 active:bg-cyan-800 active:border-2 active:border-cyan-950'
      : ''"
      @click="navigateTo ? navigate() : () => {} "
  >
    <font-awesome-icon
        v-if="type !== 'label' && icon"
        class="text-xl"
        :icon="icon!"/>
    <span v-if="type !== 'icon' && label">{{ label }}</span>
  </div>
</template>