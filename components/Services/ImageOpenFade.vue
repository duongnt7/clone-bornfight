<template lang="">
  <div class='relative w-full' :class='[setSize]'>
    <div class='absolute w-full h-full duration-300 delay-100 ease z-2 x' :class='[ setSide]' :style='{background: bgColor}'></div> 
    <img class='w-full' :src='image' />
  </div>
</template>
<script>
export default {
  name: "ImageOpenFade",
  props: ["bgColor", "size", "side", "image"],
  computed: {
    setSize() {
      if (this.size == "height") return "hideHeight";
      else return "hideWidth";
    },
    setSide() {
      switch (this.side) {
        case "top":
          return "top-0";
        case "right":
          return "right-0";
        case "bottom":
          return "bottom-0";
        default:
          return "left-0";
      }
    },
  },
};
</script>
<style>
.show_c .hideWidth > div {
  width: 0;
}
.show_c .hideHeight > div {
  width: 0;
}
</style>