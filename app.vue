<script setup lang="ts">
async function navigate(path: string) {
  await navigateTo(path)
}
</script>

<template>
  <div class="flex flex-col justify-between w-full h-full">
    <nav class="flex h-20 bg-red-200 items-center justify-center gap-10">
      <span class="cursor-pointer" @click="navigate('/about')">About</span>
      <span class="cursor-pointer" @click="navigate('/work')">Work</span>
      <span class="cursor-pointer" @click="navigate('/projects')">Projects</span>
      <span class="cursor-pointer" @click="navigate('/contacts')">Contacts</span>
    </nav>
      <NuxtPage class="h-full w-full" />
    <footer class="fixed bottom-0 left-0 w-full">
      <p>Socials</p>
    </footer>
  </div>
</template>
