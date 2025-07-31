<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SchemeComponent',
  props: {
    value: {
      type: Object,
      default: { title: 'Hello SchemeComponent' },
    },
  },
});
</script>

<template>
  <div v-if="value">__markdown_html__</div>
</template>
