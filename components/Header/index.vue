<template lang="">
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
        <i class="header-menu-line line-top"></i>
        <i class="header-menu-line line-middle"></i>
        <i class="header-menu-line line-bot"></i>
      </div>

      <!-- <div>
      hello@bornfight.com
    </div> -->
    </div>
    <div class="navigation" :class="{ navigation__animation: menuOpen }">
      <div class="navigation__content">
        <div class="navigation__content-left">
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
              <li><a href="#">What we do</a></li>
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
  name: "Header",
  data() {
    return {
      menuOpen: false,
      openImage: false
    };
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        setTimeout(() => {
          this.openImage = !this.openImage;
        }, 1000);
      } else {
        this.openImage = false;
      }
    }
  }
};
</script>
<style scoped>
.navigation {
  display: none;
}
.navigation__animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 100vh;
  animation: slideRight ease 0.8s;
  z-index: 12;
  color: #000;
  display: block;
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
.openImage {
  animation: slideCenterRight ease 1s forwards;
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
.header-menu-line {
  display: inline-block;
  background-color: #fff;
  width: 2px;
  height: 30px;
  transition: 0.4s;
  mix-blend-mode: difference;
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
