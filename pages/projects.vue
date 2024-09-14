<script setup lang="ts">
import unroll from 'assets/images/thumbnails/unroll.png'
import micro from 'assets/images/thumbnails/micro.png'
import steam from 'assets/images/thumbnails/steam.png'
import wild from 'assets/images/thumbnails/wild.png'
import ants from 'assets/images/thumbnails/ants.png'
import tdl from '~/assets/images/thumbnails/tdl.PNG'
import augmentativeScheme from '~/assets/images/thumbnails/augmentativeScheme.png'
</script>

<template>
  <div class="flex flex-col gap-10 h-full w-full">
    <span class="text-white text-3xl underline">
      Projects:
    </span>
    <ProjectCard
      :thumbnail="augmentativeScheme"
      name="LGPVR"
      description="A proof-of-concept that aims to demonstrate augmentative communication between a Portuguese sign language speaker and a Portuguese non-sign language speaker in virtual reality."
      :stack="['Unity', 'Meta', 'Azure', 'C#']"
      url="https://github.com/j-galveias/LGPVR"
    />
    <ProjectCard
      :thumbnail="tdl"
      name="TDL"
      description="A Tokenized Driving License developed during the User Centered Design course.&#10; The TDL is a mobile app to manage personal driving licenses and report parking infringements."
      :stack="['JavaScript', 'D3.js']"
      url="https://github.com/j-galveias/TDL"
    />
    <ProjectCard
      :thumbnail="steam"
      name="SteamGameDataVIS"
      description="A data visualization project developed during the Information Visualization course."
      :stack="['Flutter', 'Firebase', 'Figma']"
      url="https://github.com/j-galveias/SteamGameDataVIS"
    />
    <ProjectCard
      :thumbnail="unroll"
      name="Unroll"
      description="A game developed during the Game Development Methodology course.&#10; It was displayed in the MOJO Games Showcase."
      :stack="['Unity', 'C#']"
      url="https://github.com/j-galveias/Unroll"
    />
    <ProjectCard
      :thumbnail="wild"
      name="WildSurvival"
      description="A game developed during the Game Design course."
      :stack="['Unity', 'C#']"
      url="https://github.com/j-galveias/WildSurvival"
    />
    <ProjectCard
      :thumbnail="ants"
      name="Ants"
      description="An Ant Colony simulation developed during the Autonomous Agents and Multi-Agent Systems course.&#10; The Ants drop two types of pheromones, one to remember their way back to the nest and another one to remember their way to a food source that was previously found."
      :stack="['Unity', 'C#']"
      url="https://github.com/j-galveias/Ants"
    />
    <ProjectCard
      :thumbnail="micro"
      name="MicroMachines"
      description="A Micro Machines game built in C++ during the Computer Graphics for Games course."
      :stack="['Unity', 'C#']"
      url="https://github.com/j-galveias/MicroMachines"
    />
  </div>
</template>
