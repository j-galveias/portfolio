<script setup lang="ts">
import { useRouter } from 'vue-router'
import paths from '~/utils/paths'

const router = useRouter()

const selected = ref('')

onMounted(() => {
  selected.value = paths.find(p =>
    p.name === router.currentRoute.value.name,
  )?.name ?? selected.value
})
</script>

<template>
  <nav class="fixed flex min-h-20 w-full z-20 text-white text-2xl items-center px-20 gap-10">
    <template
      v-for="p in paths"
      :key="p.name"
    >
      <NuxtLink
        class="navItem"
        :class="{ selectedItem: selected === p.name }"
        :to="p.link"
        @click="selected = p.name"
      >
        {{ p.title }}
      </NuxtLink>
    </template>
    <Button
      label="Resume"
      type="icon-label"
      icon="far fa-file"
      external
      navigate-to="/cv/Resume2024.pdf"
    />
  </nav>
</template>
