<template>
  <div class="app">
    {{ state.count }}
  </div>
</template>

<script>
import { getCurrentInstance, reactive } from "vue";

export default {
  name: "Actions",
  setup () {
    const { ctx } = getCurrentInstance();
    console.log(ctx);

    const state = reactive({ count: 3 });

    return { state };
  }
};
</script>

<style></style>
