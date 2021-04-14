<template lang="">
  <section class='detail text-left'>
    <div class='o-container'>
      <Layout :details='details'/>
    </div>
  </section>
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
          background: "#363636",
        },
        {
          title: "",
          description:
            "Building a customer-centric web experience for a rapidly-growing company ",
          platform: "Website",
          dev: "Infobip",
          link: "",
          img:
            "https://www.bornfight.com/wp-content/uploads/2020/03/bf-home-parallax-bottom-layer-image.png",
          background: "#FF5A00",
        },
        {
          title: "",
          description:
            "Building a companion mobile app for a cutting-edge media monitoring tool ",
          platform: "Mobile Application",
          dev: "Mediatoolkit ",
          link: "",
          img:
            "https://www.bornfight.com/wp-content/uploads/2020/01/bornfight_case_study_mediatoolkit_parallax_top.png",
          background: "#030627",
        },
        {
          title: "",
          description:
            "Modernizing fraud management to improve process efficiency  ",
          platform: "Custom Software",
          dev: "Mercury Processing Services ",
          link: "",
          img:
            "https://www.bornfight.com/wp-content/uploads/2020/02/bornfight_mercury_fraud_bf-home-parallax-bottom-layer-image.png",
          background: "#393978",
        },
        {
          title: "",
          description:
            "Improving business communication through a private social network",
          platform: "Mobile Application",
          dev: "Beyond",
          link: "",
          img:
            "https://www.bornfight.com/wp-content/uploads/2019/04/beyond.png",
          background: "#1F2154",
        },
      ],
    };
  },
};
</script>
<style scoped>
.detail {
  color: #fff;
  margin: 0 auto;
  padding-left: 6.25%;
  position: relative;
  float: right;
  background: #0d0d0d;
  overflow: hidden;
}
</style>