<template>
  <div id="app">
    <cont :msg="cent"></cont>
  </div>
</template>
<script>
import cont from "./Main.vue";
export default {
  name: "app",
  data() {
    return { cent: { bgurl: 96, goodsurl: "" } };
  },
  components: {
    cont
  }
};
</script>
