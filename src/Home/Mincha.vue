<template>
  <div class="app">
    <cont :msg="cent"></cont>
  </div>
</template>
<script>
import cont from "./Main.vue";
export default {
  name: "app",
  data() {
    return { cent: { bgurl: 101, goodid: 6 } };
  },
  components: {
    cont
  }
};
</script>
