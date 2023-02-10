<template>
  <div>
    <hello-world></hello-world>
    <actions></actions>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue';
import Actions from 'components/Actions.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Actions
  }
}
</script>

<style>
</style>