<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import NavBar from "~/components/NavBar.vue";
</script>

<template>
  <div class="flex flex-col bg-gray-800 justify-between w-screen h-screen">
    <NavBar></NavBar>
    <NuxtPage />
    <Footer></Footer>
  </div>
</template>
