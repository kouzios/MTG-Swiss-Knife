<template>
  <div>
    <gamestate/>
    <settings/>
  </div>
</template>

<script>
import gamestate from './Gamestate.vue';
import settings from './Settings.vue';

export default {
  components: {
    gamestate,
    settings
  }
}
</script>

<style scoped>
</style>
