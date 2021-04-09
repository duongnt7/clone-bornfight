<template lang="">
  <div>
    <div class='grid items-center grid-detail' v-for="(detail, index) in details">
      <div>
        <div class='title my-4'>{{detail.title}}</div>
        <p>0{{index+1}}</p>
        <p class='my-4'>{{detail.description}}</p>
        <p>{{detail.platform}} - {{detail.dev}}</p>
      </div>
      <div :style="{backgroundColor: detail.background}" class='grid-detail-img'>
        <img :src="detail.img"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Layout",
  props: ["details"],
};
</script>
<style scoped>
.grid-detail {
  grid-template-columns: 50% 50%;
  height: 100vh;
}
.grid-detail-img {
  height: 100vh;
}
</style>