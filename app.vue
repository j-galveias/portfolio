<script setup lang="ts">
import Footer from '~/components/Footer.vue'
import NavBar from '~/components/NavBar.vue'
</script>

<template>
  <div class="flex h-screen flex-col">
    <NavBar />
    <div class="flex grow flex-col">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
