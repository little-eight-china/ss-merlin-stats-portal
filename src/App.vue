<template>
  <div id="app">
    <Portal/>
  </div>
</template>

<script>
import Portal from '@/components/Portal.vue'

export default {
  name: 'App',
  components: {Portal}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif
}
</style>
