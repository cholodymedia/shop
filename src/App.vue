<template>
  <div id="app">
    <Navi/>
  </div>
</template>

<script>
import Navi from '@/components/Navi.vue';

export default {
  name: 'app',
  components: {
    Navi,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: whitesmoke;
}
</style>
