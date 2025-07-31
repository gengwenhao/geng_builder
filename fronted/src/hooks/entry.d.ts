declare module '@/hooks/entry' {
  import { Ref } from 'vue'

  export const useEntry: (retryDelay?: number) => {
    isLoaded: Ref<boolean>
    entryData: Ref<unknown>
    entryComponent: Ref<unknown>
    init: () => Promise<void>
  }
}
