<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HelloGeng',
  props: {
    value: {
      type: Object,
      default: { title: 'Hello Geng~~' },
    },
  },
});
</script>

<template>
  <div v-if="value">__markdown_html__</div>
</template>
