<template lang="javascript">
  <div>
    <div class="left grid fixed header">
      <div>
        <nuxt-link to="/">
          <img
            src="https://www.bornfight.com/wp-content/themes/bornfight-web-2020/static/ui/BF-sign-light.svg"
            alt="Born-fight"
            class="w-full mt-4 header-logo"
          />
        </nuxt-link>
      </div>
      <div
        id="icon-toggle"
        class="text-center cursor-pointer header-menu"
        @click="openMenu"
        :class="{ open: menuOpen }"
      >
        <div class="bt-menu">
          <i class="relative header-menu-line line-top"></i>
          <i class="relative header-menu-line line-middle"></i>
          <i class="relative header-menu-line line-bot"></i>
        </div>
      </div>

      <!-- <div>
      hello@bornfight.com
    </div> -->
    </div>
    <div
      class="navigation"
      :class="{
        navigation__animation: menuOpen,
        keep_nav: keepOpen,
        fade: animationFade
      }"
    >
      <div class="navigation__content">
        <div class="flex items-center navigation__content-left">
          <div class="content__logo-top">
            <a href="#">
              <img
                src="https://www.bornfight.com/wp-content/themes/bornfight-web-2020/static/ui/bf-logo-dark.svg"
                alt="Bornfight"
              />
            </a>
          </div>
          <div class="content__links">
            <ul class="content__links--top">
              <li @click="openMenu">
                <NuxtLink to="/services">What we do</NuxtLink>
              </li>
              <li><a href="#">Your work</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            <ul class="content__links--bottom">
              <li><a href="#">Home</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Subscribe to our newsletter</a></li>
              <li><a href="#">Start a project </a></li>
            </ul>
          </div>
        </div>
        <div class="navigation__content-right">
          <div class="bg-menu__white" :class="{ openImage: openImage }"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuOpen: false,
      openImage: false,
      keepOpen: false,
      animationFade: false
    };
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        this.keepOpen = !this.keepOpen;
        setTimeout(() => {
          this.openImage = !this.openImage;
        }, 1000);
      } else {
        setTimeout(() => {
          this.animationFade = true;
        }, 700);
        setTimeout(() => {
          this.keepOpen = !this.keepOpen;
          this.openImage = !this.openImage;
          this.animationFade = false;
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
.navigation {
  display: none;
  opacity: 0;
}

.keep_nav {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 100vh;
  animation: slideRight ease 0.8s;
  z-index: 12;
  color: #000;
  opacity: 1;
}
@keyframes slideRight {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
.navigation__content {
  margin-left: 105px;
  /* margin-top: 235px; */
}
.keep_nav.fade {
  animation: fade forwards 0.3s;
}
@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.navigation__content-left {
  background-color: #fff;
  width: 100%;
  padding-right: 46.666666662vh;
  height: 100vh;
  will-change: transform;
  position: relative;
  z-index: 3;
}
.navigation__content-right {
  width: 46.666666662vh;
  background-color: chocolate;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  will-change: transform;
  overflow: hidden;
  z-index: 4;
  position: absolute;
  right: 0;
  top: 0;
}
.bg-menu__white {
  width: 100%;
  height: 100vh;
  background-color: #fff;
}
@keyframes slideCenterRight {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}
.navigation__animation.keep_nav .openImage {
  animation: slideCenterRight ease 1s forwards;
}
.keep_nav .openImage {
  animation: slideCenterRightHide ease 0.5s forwards;
}
@keyframes slideCenterRightHide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
.content__links li {
  animation: hideLi forwards 0.8s;
}
@keyframes hideLi {
  from {
    transform: translateY(0px);
    opacity: 1;
    display: none;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
    display: none;
  }
}
.navigation__animation .content__links li {
  animation: showLi forwards 2s;
}
@keyframes showLi {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
.content__links--top {
  font-size: 3rem;
  line-height: 5rem;
}
.content__links--bottom {
  margin-top: 50px;
  line-height: 2;
  color: #2f2f2f;
}
.navigation__content a {
  color: #000;
  text-decoration: none;
  letter-spacing: 0.5px;
  display: inline-block;
  position: relative;
}
.navigation__content a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  right: 0;
  position: absolute;
  background: #000;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.navigation__content a:hover:after {
  width: 100%;
  left: 0;
}

.header {
  width: 100px;
  height: 100vh;
  background-color: transparent;
  z-index: 20;
}
.header-logo {
  height: 42px;
}
.header-menu {
  margin: 0 auto;
}
.open .header-menu-line {
  background-color: #111;
}
.header-menu-line {
  display: block;
  background-color: #fff;
  width: 30px;
  height: 2px;
  margin-bottom: 5px;
  mix-blend-mode: difference;
  transition: 0.4s;
  width: 30px;
}
.header-menu-line::after {
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  background: #111;
  opacity: 0.5;
  right: 0;
  width: 0;
}
.bt-menu:hover .header-menu-line::after {
  left: 0;
}
.line-top.header-menu-line::after {
  animation: anmBtMenu forwards 0.4s;
}
.line-middle.header-menu-line::after {
  animation: anmBtMenu forwards 0.4s 50ms;
}
.line-bot.header-menu-line::after {
  animation: anmBtMenu forwards 0.4s 0.1s;
}
.open .header-menu-line::after {
  background-color: #fff;
}
.bt-menu:hover .line-top.header-menu-line::after {
  animation: anmBtMenuHover forwards 0.4s;
}
.bt-menu:hover .line-middle.header-menu-line::after {
  animation: anmBtMenuHover forwards 0.4s 50ms;
}
.bt-menu:hover .line-bot.header-menu-line::after {
  animation: anmBtMenuHover forwards 0.4s 0.1s;
}
@keyframes anmBtMenu {
  from {
    /* transform: translateX(0); */
    width: 30px;
  }
  to {
    width: 0;
  }
}
@keyframes anmBtMenuHover {
  from {
    width: 0;
  }
  to {
    width: 30px;
  }
}
.open .line-top {
  transform: rotate(-45deg) translate(-10px, 0px);
}
.open .line-bot {
  transform: rotate(45deg) translate(-5px, 5px);
}
.open .line-middle {
  display: none;
}
</style>
