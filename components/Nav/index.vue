<template lang="">
  <div>
    <div class='xl:text-8xl lg:text-7xl md:text-6xl font-bold text-left'>
      <div>We build top-notch</div>
      <div>custom web and</div>
      <div>mobile solutions</div>
    </div>
    <SlideText :text="slide[slideShow]" />
    <div class='slide-control'>
      <div class='slide-control-bt inline-block rounded-full' @click='prevSlide'>
        <span></span>
        <span class='slide-control-bt-hover rounded-full'></span>
      </div>
      <div class='slide-control-bt inline-block rounded-full' @click='nextSlide'>
        <span></span>
        <span class='slide-control-bt-hover rounded-full'></span>
      </div>
    </div>
  </div>
</template>
<script>
import SlideText from "./SlideText";
export default {
  components: { SlideText },
  data() {
    return {
      slideShow: 0,
      slide: [
        `Subscribe to our newsletter and get a selection of our top news for product managers and entrepreneurs.`,
        `We create progress by designing and developing custom software, mobile applications and websites. `,
        `Download useful guides that will enable you to better navigate through your web and mobile projects. `,
        `Subscribe to our newsletter and get a selection of our top news for product managers and entrepreneurs. `,
        `We create progress by designing and developing custom software, mobile applications and websites. `,
      ],
    };
  },
  mounted() {
    // const autoNextSlide = setInterval(() => {
    //   this.nextSlide();
    // }, 5000);
    // autoNextSlide;
  },
  beforeUnmount() {
    // clearInterval(autoNextSlide);
  },
  methods: {
    nextSlide() {
      if (this.slideShow === this.slide.length - 1) {
        this.slideShow = 0;
      } else {
        this.slideShow++;
      }
    },
    prevSlide() {
      if (this.slideShow === 0) {
        this.slideShow = this.slide.length - 1;
      } else {
        this.slideShow--;
      }
    },
  },
};
</script>
<style scoped>
.slide-control-bt {
  border: 1px solid #fff;
  width: 70px;
  height: 70px;
  background-color: #0d0d0d;
}
.slide-control-bt-hover {
  position: absolute;
  width: 0;
  height: 0;
  background-color: #fff;
  transition: 0.4s;
  z-index: 1;
  /* transform: translate(35px, 35px); */
  margin-top: 34px;
  margin-left: 34px;
}
.slide-control-bt:hover .slide-control-bt-hover {
  width: 70px;
  height: 70px;
  transform: translate(-35px, -35px);
}
</style>