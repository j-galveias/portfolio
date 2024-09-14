<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-10 h-full w-full text-white">
    <span class="text-3xl underline">
      Work:
    </span>
    <WorkDetails
      company="Tpg"
      role="Full-Stack Developer"
      start-date="March 2023"
      location="Remote, Portugal"
      description="Currently responsible for rebuilding and maintaining B2B, B2G, ticket shop, and administration websites.
      I work on both the frontend and backend of these applications."
      :stack="['Nuxt JS', 'Kotlin', 'Java', 'TypeScript', 'SQL']"
      :tools="['Figma', 'Jira', 'Gitlab', 'IntelliJ']"
    />
    <WorkDetails
      company="NTT Data"
      role="AR Developer"
      start-date="July 2022"
      end-date="Sept. 2022"
      location="Lisbon, Portugal"
      description="Autonomously developed an augmented reality mobile app for remote assistance, using Unity.
      Used Agora SDK to handle the videocall and message chat.
      Used ARCore for the AR drawings and AR icons."
      :stack="['C#']"
      :tools="['Unity', 'Microsoft Visual Studio', 'ARCore']"
    />
  </div>
</template>
