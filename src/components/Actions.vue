<template>
  <div class="app">
    {{ state.count }}
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Actions",
  setup () {
    const state = reactive({ count: 3 });

    return { state };
  }
};
</script>

<style></style>
