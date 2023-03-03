<script>
import { RouterView } from 'vue-router'
import CopyFooter from './components/CopyFooter.vue'

export default {
  components: {
    RouterView,
    CopyFooter,
  }
}
</script>

<template>
  <RouterView />
  <CopyFooter />
</template>