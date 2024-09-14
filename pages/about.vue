<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-10 h-full w-full text-white">
    <div class="flex w-full items-center justify-center">
      <img
        class="rounded-full h-60 w-60"
        src="~/assets/images/profilePic.jpg"
        alt="Profile picture"
      >
    </div>
    <span class="text-3xl underline">
      About:
    </span>
    <span>
      I’m a Software Engineer from Portugal, and I’m really into full-stack and VR/AR development. I’m all about learning from others, diving into exciting projects, and leveling up my skills as I go. I’m a focused and dedicated individual with a love for learning and a laid-back, introverted nature. When I’m not coding, you can find me delving into books on social psychology and personal growth, or staying active through exercise. These activities help me stay balanced and inspired, fueling my journey in the tech world.
    </span>
    <span class="text-3xl underline">
      Education:
    </span>
    <div class="flex flex-col gap-2">
      <Experience
        role="Master in Computer Science and Engineering"
        company="Instituto Superior Técnico"
        start-date="Sept. 2020"
        end-date="Nov. 2022"
        location="Lisbon, Portugal"
      />
      <Experience
        role="Bachelor in Computer Science and Engineering"
        company="Instituto Superior Técnico"
        start-date="Sept. 2017"
        end-date="June 2020"
        location="Lisbon, Portugal"
      />
    </div>
    <span class="text-3xl underline">
      Skills:
    </span>
    <div class="flex flex-wrap gap-5 pb-10">
      <Skill
        icon="/icons/javascript.svg"
        tooltip="JavaScript"
      />
      <Skill
        icon="/icons/typescript.svg"
        tooltip="TypeScript"
      />
      <Skill
        icon="/icons/kotlin.svg"
        tooltip="Kotlin"
      />
      <Skill
        icon="/icons/java.svg"
        tooltip="Java"
      />
      <Skill
        icon="/icons/python.svg"
        tooltip="Python"
      />
      <Skill
        icon="/icons/vue.svg"
        tooltip="Vue JS"
      />
      <Skill
        icon="/icons/nuxt.svg"
        tooltip="Nuxt JS"
      />
      <Skill
        icon="/icons/git.svg"
        tooltip="Git"
      />
      <Skill
        icon="/icons/figma.svg"
        tooltip="Figma"
      />
      <Skill
        icon="/icons/firebase.svg"
        tooltip="Firebase"
      />
      <Skill
        icon="/icons/unity.svg"
        tooltip="Unity"
      />
    </div>
  </div>
</template>
