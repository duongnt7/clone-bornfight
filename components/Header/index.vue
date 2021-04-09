<template lang="">
  <div class="left grid fixed header">
    <div>
      <nuxt-link to="/">
      <img src='https://www.bornfight.com/wp-content/themes/bornfight-web-2020/static/ui/BF-sign-light.svg' alt='Born-fight' class='w-full mt-4 header-logo' /> 
    </nuxt-link>
    </div>
    <div class='text-center cursor-pointer header-menu' :class="{'open':menuOpen}" @click="openMenu">
      <i class='header-menu-line line-top'></i>
      <i class='header-menu-line line-middle'></i>
      <i class='header-menu-line line-bot'></i>
    </div>
    <!-- <div>
      hello@bornfight.com
    </div> -->
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
<style scoped>
.header {
  width: 100px;
  height: 100vh;
  background-color: #0d0d0d;
}
.header-logo {
  height: 42px;
}
.header-menu-line {
  display: inline-block;
  background-color: #fff;
  width: 2px;
  height: 30px;
  transition: 0.4s;
}
.open .line-top {
  transform: rotate(-45deg) translate(0px, 0px);
}
.open .line-bot {
  transform: rotate(45deg) translate(-6px, 5px);
}
.open .line-middle {
  display: none;
}
</style>