<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

type Props = {
  label?: string
  navigateTo?: string
  type: ButtonType
  icon?: string
  external?: boolean
}

defineProps<Props>()
</script>

<template>
  <KeepAlive>
    <NuxtLink
      :is="navigateTo ? 'NuxtLink' : 'div'"
      class="flex items-center justify-center"
      :class="{ button: type !== 'icon' }"
      :to="navigateTo !== undefined ? navigateTo : undefined"
      target="_blank"
      :external
    >
      <div
        class="flex justify-center items-center text-white cursor-pointer select-none"
        :class="{ 'px-4 gap-2': type !== 'icon' }"
      >
        <font-awesome-icon
          v-if="type !== 'label' && icon"
          class="text-xl"
          :class="{ 'hover:text-indigo-500': type === 'icon' }"
          :icon="icon!"
        />
        <span v-if="type !== 'icon' && label">{{ label }}</span>
      </div>
    </NuxtLink>
  </KeepAlive>
</template>
