<script setup lang="ts">
import Footer from '~/components/Footer.vue'
import NavBar from '~/components/NavBar.vue'
</script>

<template>
  <div id="smallStars" />
  <div id="mediumStars" />
  <div id="bigStars" />
  <div class="flex h-screen flex-col absolute w-full">
    <NavBar />
    <div class="content">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
