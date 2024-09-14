<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

type Props = {
  icon: string
  contact: string
  isEmail?: boolean
}

const props = defineProps<Props>()

const email = computed(() => props.contact.split(':')[1] ?? '')

const link = computed(() => props.isEmail ? email.value : props.contact)
</script>

<template>
  <div class="flex items-center gap-3 text-2xl">
    <font-awesome-icon
      class="text-4xl"
      :icon="icon"
    />
    :
    <span
      class="text-2xl hover:underline hover:text-indigo-500 cursor-pointer"
      @click="navigateLink(contact)"
    >{{ link }}</span>
  </div>
</template>
