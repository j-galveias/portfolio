<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-10 h-full w-full text-white">
    <span class="text-3xl underline">
      Contacts:
    </span>
    <ContactInfo
      icon="fab fa-github"
      contact="https://github.com/j-galveias"
    />
    <ContactInfo
      icon="fab fa-linkedin-in"
      contact="https://linkedin.com/in/joao-galveias"
    />
    <ContactInfo
      icon="far fa-envelope"
      contact="mailto:joao.galveias@tecnico.pt"
      is-email
    />
  </div>
</template>
