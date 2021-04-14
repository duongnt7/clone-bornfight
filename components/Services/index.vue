<template lang="">
  <div>
    <ServiceHeader/>
    <Article/>
    <ImageFull linkImg="https://www.bornfight.com/wp-content/uploads/2018/08/services-01.jpg" />
    <Expertise/>
    <ImageFull linkImg="https://www.bornfight.com/wp-content/uploads/2018/08/services-highlight-03.jpg" />
    <Testimonials/>
    <FrameWorks/>
  </div>
</template>
<script>
import { AsyncComponent } from "vue";
import ServiceHeader from "./Header";
import Article from "./Article";
import ImageFull from "./ImageFull";
import Expertise from "./Expertise";
import Testimonials from "./Testimonials";
// import FrameWorks from "./FrameWorks";
// const FrameWorks = () => import("./FrameWorks");
const FrameWorks = () =>
  import(/* webpackChunkName: "FrameWorks" */ "./FrameWorks");
export default {
  components: {
    ServiceHeader,
    Article,
    ImageFull,
    Expertise,
    Testimonials,
    FrameWorks,
  },
};
</script>
<style>
.container-service {
  padding: 20% 0% 10% 20%;
}
.view-link::after {
  /* background: none repeat scroll 0 0 transparent; */
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  /* left: 0; */
  position: absolute;
  background: #000;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 100%;
}
.view-link:hover::after {
  right: 0;
  width: 0;
}
</style>