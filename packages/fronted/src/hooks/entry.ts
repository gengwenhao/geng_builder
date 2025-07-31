import { computed, ref, watch } from 'vue'
import { getEntryComponent, getEntryData } from '@/api'

export const useEntry = (retryDelay = 3000) => {
  let entryData = ref(null)
  let entryComponent = ref(null)
  let isLoaded = computed(() => {
    return entryComponent.value && entryData
  })

  const init = async () => {
    entryData.value = await getEntryData()
    entryComponent.value = await getEntryComponent()
  }

  let timer = null
  watch(
    () => isLoaded.value,
    (val) => {
      if (!val) {
        timer = setInterval(init, retryDelay)
      } else {
        clearInterval(timer)
      }
    },
    { immediate: true }
  )

  return {
    isLoaded,
    entryData,
    entryComponent,
    init,
  }
}
