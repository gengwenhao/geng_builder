<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getEntryComponent } from '@/api'

let entryComponent = ref(null)

onMounted(async () => {
  entryComponent.value = await getEntryComponent()
})
</script>

<template>
  <div class="home">
    <component v-if="entryComponent" :is="entryComponent" />
    <div v-else>组件加载中....</div>
  </div>
</template>
