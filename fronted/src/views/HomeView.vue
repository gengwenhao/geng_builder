<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getEntryComponent, getEntryData } from '@/api'

let entryComponent = ref(null)
let entryData = ref(null)

onMounted(async () => {
  entryComponent.value = await getEntryComponent()
  entryData.value = await getEntryData()
})
</script>

<template>
  <div class="home">
    <component v-if="entryComponent && entryData" :is="entryComponent" v-model="entryData" />
    <div v-else>组件加载中....</div>
  </div>
</template>
