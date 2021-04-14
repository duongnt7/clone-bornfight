<template lang="">
  <section ref="nav" class="nav">
    <div class="o-container">
      <h1 class="xl:text-8xl lg:text-7xl md:text-6xl font-bold text-left">
        <div>We build top-notch</div>
        <div>custom web and</div>
        <div>mobile solutions</div>
      </h1>
      <SlideText :text="slide[slideShow]" />
      <div class="slide-control">
        <div
          class="slide-control-bt inline-block rounded-full relative "
          @click="prevSlide"
        >
          <div class="absolute slide-control-bt-img arrow-left"></div>
          <span class="slide-control-bt-hover rounded-full"></span>
        </div>
        <div
          class="slide-control-bt inline-block rounded-full"
          @click="nextSlide"
        >
          <div class="absolute slide-control-bt-img"></div>
          <span class="slide-control-bt-hover rounded-full"></span>
        </div>
      </div>
    </div>
  </section>
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
        `We create progress by designing and developing custom software, mobile applications and websites. `
      ]
    };
  },
  mounted() {
    // const autoNextSlide = setInterval(() => {
    //   this.nextSlide();
    // }, 5000);
    // autoNextSlide;
    this.$store.commit("offset/setOffsetHeight", this.$refs.nav.offsetHeight);
    // console.log(this.$refs.nav.offsetHeight);
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
    }
  }
};
</script>
<style scoped>
.nav {
  background-color: #0d0d0d;
  color: #fff;
  position: relative;
  padding: 12.5vh 0 12.5vh 6.25%;
  /* height: 100vh; */
  min-height: 100vh;
}
.slide-control-bt {
  border: 1px solid #fff;
  width: 70px;
  height: 70px;
  background-color: #0d0d0d;
}
.slide-control-bt-img {
  z-index: 1;
  width: 70px;
  height: 70px;
  background: url("~/src/images/arrow-right-white.svg") no-repeat center / 20px
    20px;
}
.slide-control-bt:hover .slide-control-bt-img {
  background: url("~/src/images/arrow-right-black.svg") no-repeat center / 20px
    20px;
}
.slide-control-bt .slide-control-bt-hover {
  position: absolute;
  width: 0;
  height: 0;
  background-color: #fff;
  transition: 0.4s;
  margin-top: 35px;
  margin-left: 35px;
  box-sizing: border-box;
}
.slide-control-bt:hover > .slide-control-bt-hover {
  width: 70px;
  height: 70px;
  transform: translate(-35px, -35px);
}
.arrow-left {
  transform: scale(-1);
}
</style>
