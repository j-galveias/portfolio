<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-10 h-full w-full px-20 py-20">
    <span class="text-white text-3xl underline">
      Projects:
    </span>
    <ProjectCard
      thumbnail="/images/thumbnails/tdl.png"
      name="TDL"
      description="A Tokenized Driving License developed during the User Centered Design course. The TDL is a mobile app to manage personal driving license and report parking infringements."
      :stack="['Javascript', 'D3.js']"
      url="https://github.com/j-galveias/TDL"
    />
    <ProjectCard
      thumbnail="/images/thumbnails/tdl.png"
      name="SteamGameDataVIS"
      description="A data visualization project developed during the Information Visualization course."
      :stack="['Flutter', 'Firebase', 'Figma']"
      url="https://github.com/j-galveias/SteamGameDataVIS"
    />
    <ProjectCard
      thumbnail="/images/thumbnails/tdl.png"
      name="LGPVR"
      description="A Tokenized Driving License developed during the User Centered Design course. The TDL is a mobile app to manage personal driving license and report parking infringements."
      :stack="['Unity', 'Meta', 'Azure', 'C#']"
      url="https://github.com/j-galveias/LGPVR"
    />
    <ProjectCard
      thumbnail="/images/thumbnails/tdl.png"
      name="Unroll"
      description="A game developed during the Game Development Methodology course.
        It was displayed in the MOJO Games Showcase."
      :stack="['Unity', 'C#']"
      url="https://github.com/j-galveias/Unroll"
    />
    <ProjectCard
      thumbnail="/images/thumbnails/tdl.png"
      name="WildSurvival"
      description="A game developed during the Game Design course."
      :stack="['Unity', 'C#']"
      url="https://github.com/j-galveias/WildSurvival"
    />
    <ProjectCard
      thumbnail="/images/thumbnails/tdl.png"
      name="Ants"
      description="An Ant Colony simulation developed during the Autonomous Agents and Multi-Agent Systems course. The Ants drop two types of pheromones, one to remember their way back to the nest and another one to remember their way to a food source that was previously found."
      :stack="['Unity', 'C#']"
      url="https://github.com/j-galveias/Ants"
    />
    <ProjectCard
      thumbnail="/images/thumbnails/tdl.png"
      name="MicroMachines"
      description="A Micro Machines game built in C++ during the Computer Graphics for Games course."
      :stack="['Unity', 'C#']"
      url="https://github.com/j-galveias/MicroMachines"
    />
  </div>
</template>
