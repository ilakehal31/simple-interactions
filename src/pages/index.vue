<script setup lang='ts'>
import { useTitle } from '@vueuse/core'
import { works } from '../works'

const avaliable_works = works.filter(i => !i.draft)

useTitle('simple interactions')
</script>

<template>
  <div class="paper">
    <div class="centered index-page">
      <h1 class="font-mono mb-2 text-lg font-bold mb-4">
        Simple interactions
      </h1>
      <pre
        class="grid gap-x-4 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
      <router-link v-for="work of avaliable_works" :key="work.no" :to="`/${work.no}`" class="link block mr-4">
        <span class="mr-2 opacity-50">{{ work.no }}</span>
        <b>{{ work.name }}</b>
      </router-link>
    </pre>
      <h1 class="font-mono mb-2 mt-8">
        <a href="https://idrislakehal" class="link" target="_blank">@idrislakehal</a>
        <span class="mx-1">.</span>
        <a href="https://github.com/ilakehal31/simple-interactions" class="link" target="_blank">github</a>
      </h1>
    </div>
  </div>
</template>
