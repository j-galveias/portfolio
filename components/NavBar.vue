<script setup lang="ts">
async function navigate(path: string) {
  await navigateTo(path)
}
</script>

<template>
  <nav class="flex h-20 text-white text-2xl items-center px-20 gap-10">
    <span class="cursor-pointer hover:text-teal-600" @click="navigate('/')">Home</span>
    <span class="cursor-pointer hover:text-teal-600" @click="navigate('/about')">About</span>
    <span class="cursor-pointer hover:text-teal-600" @click="navigate('/work')">Work</span>
    <span class="cursor-pointer hover:text-teal-600" @click="navigate('/projects')">Projects</span>
    <span class="cursor-pointer hover:text-teal-600" @click="navigate('/contacts')">Contacts</span>
  </nav>
</template>