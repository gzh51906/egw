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
    return { cent: { bgurl: 99, goodid: 4 } };
  },
  components: {
    cont
  }
};
</script>
