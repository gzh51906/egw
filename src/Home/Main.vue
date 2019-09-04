<template>
  <div class="tit">{{bg}}</div>
</template>
<script>
export default {
  data() {
    return {
      bg: ""
    };
  },
  props: ["msg"],
  async created() {
    this.bg = `http://localhost:8888/home/goodsbgt?id=${this.msg.bgurl}`;
    /* this.$axios
      .get(`http://localhost:8888/home/goodsbgt?id=${this.msg.bgurl}`, {})
      .then(({ data }) => {
        console.log(data);
      }); */
    let { data } = await this.$axios.get(
      "http://localhost:8888/home/goodsbgt",
      {
        params: {
          id: this.msg.bgurl
        }
      }
    );
    console.log(data);
  }
};
</script>
<style lang="scss" scoped>
.tit {
  background: #f00;
  color: #fff;
}
</style>
