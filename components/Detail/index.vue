<template lang="">
  <div class='detail text-left'>
    <Layout :details='details'/>
  </div>
</template>
<script>
import Layout from "./Layout";
export default {
  components: { Layout },
  data() {
    return {
      details: [
        {
          title: "Ourwork",
          description:
            "Using Flutter to build an almost fun time-tracking app for Android and iOS ",
          platform: "Mobile Application",
          dev: "Vremenco",
          link: "",
          img:
            "https://www.bornfight.com/wp-content/uploads/2021/03/bornfight-vremenco-bf-home-case-listing-parallax-2-2x-aspect-ratio-1080-720.png",
          background: "#3363636",
        },
        {
          title: "Ourwork",
          description:
            "Using Flutter to build an almost fun time-tracking app for Android and iOS ",
          platform: "Mobile Application",
          dev: "Vremenco",
          link: "",
          img:
            "https://www.bornfight.com/wp-content/uploads/2020/03/bf-home-parallax-bottom-layer-image.png",
          background: "#FF5A00",
        },
      ],
    };
  },
};
</script>
<style scoped>
.detail {
  color: #fff;
}
</style>