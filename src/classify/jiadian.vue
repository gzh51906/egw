<template>
  <div class="app">
    <cont :msg="cent"></cont>
  </div>
</template>
<script>
import cont from "./main.vue";
export default {
  name: "app",
  data() {
    return { cent: { goodid: 9 } };
  },
  components: {
    cont
  }
};
</script>
