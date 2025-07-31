<script setup lang="ts">
import { useEntry } from '@/hooks/entry'
const { entryData, entryComponent, isLoaded } = useEntry()
</script>

<template>
  <div class="home">
    <component v-if="isLoaded" :is="entryComponent" v-model="entryData" />
    <div v-else>组件加载中....</div>
  </div>
</template>
