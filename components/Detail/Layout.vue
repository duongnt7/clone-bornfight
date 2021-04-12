<template lang="">
  <div>
    <div class='grid items-center grid-detail' >
      <div>
        <ul class='grid-detail-cl relative'  >
          <li class=' grid-detail-cl-item' v-for="(detail, index) in details">
            <div class='item-content-detail'>
              <div class='title my-4'>{{detail.title}}</div>
              <div class='ourwork-item cursor-pointer'>
                <div class='number'>0{{index+1}}</div>
                <div class='home-des my-4'>{{detail.description}}</div>
                <div class='platform'><strong>{{detail.platform}}</strong> - {{detail.dev}}</div> 
                <div class='btLink relative rounded-full' >
                  <i class='backgroundBt absolute rounded-full opacity-60' :style='{backgroundColor: detail.background}'></i>
                  <span class='btLink-content absolute rounded-full inline-block' :style='{backgroundColor: detail.background}'></span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
       <div class='grid-item-img' :style="{transform: offsetScroll}"><!-- offsetScroll -->
        <ul :style="{transform: translatePx}">
          <li v-for="(detail, index) in details" :style="{backgroundColor: detail.background}">
            <div class='grid-detail-img'  >
              <img :src="detail.img"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Layout",
  props: ["details"],
  computed: {
    offsetY() {
      return this.$store.state.offset.pageYOffset - 1000;
    },
    translatePx() {
      return `translateX(-${this.offsetY}px)`;
    },
    offsetScroll() {
      return `translateY(calc(${this.$store.state.offset.offsetScroll} - 200vh))`;
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.$store.commit("offset/setPageYOffset", window.pageYOffset);
    },
  },
};
</script>
<style scoped>
.grid-detail {
  grid-template-columns: 50% 50%;
}

.grid-detail-img {
  height: 103vh;
}
.home-des {
  font-size: 30px;
  width: 500px;
}
.grid-detail-cl-item {
  top: 50%;
  /* transform: translateY(-50%); */
}
.grid-item-img {
  overflow: hidden;
}

li {
  width: 200%;
  height: 100vh;
  display: inline-block;
  position: relative;
}
.grid-detail-cl li {
  display: flex;
  align-items: center;
  transition: background-color 2s ease-out;
}
.grid-item-img ul {
  white-space: nowrap;
}
.btLink {
  margin: 20px 0;
  cursor: pointer;
}
.backgroundBt {
  width: 50px;
  height: 50px;
  top: 10px;
  left: 10px;
  transition: 0.2s;
}
.ourwork-item:hover .backgroundBt {
  width: 70px;
  height: 70px;
  top: 0;
  left: 0;
}
.btLink-content {
  width: 50px;
  height: 50px;
  top: 10px;
  left: 10px;
  background-image: url("~/src/images/arrow-right-white.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 20px;
}
.platform {
  transition: 0.4s;
}
.ourwork-item:hover .platform {
  padding-left: 25px;
}
.number {
  transition: 0.5s;
}
.ourwork-item:hover .number {
  margin-left: 25px;
  opacity: 0;
}
.item-content-detail {
}
</style>