<template lang="">
  <section class='block home-info'>
    <div class='info-can-do'>
      <div class='can-do'>WHAT WE DO</div>
      <div class='can-do-content'>
        We’re technologists and entrepreneurs, so we understand both the technical and business challenges of creating digital products.
      </div>
    </div>
    <div class='home-intro o-container'>
      <div class='home-intro-left'>
        <div class='what-we-do'>
          <ul class='what-we-do-list'>
            <li class='what-we-do-item' v-for="(item, index) in doList" :key="index">
              <span>0{{index+1}}</span>
              <h1>{{item}}</h1>
            </li>
          </ul>
        </div>
      </div>
      <div class='home-intro-right'>

      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      doList: ["Strategy", "Design", "Development"],
    };
  },
};
</script>
<style scoped>
.home-info {
  background: #fff;
  color: #111;
  padding-top: 20vh;
  padding-bottom: 20vh;
  padding-left: 6.25%;
}
.info-can-do {
  /* float: right; */
  width: 100%;
  max-width: 88.88889%;
  padding-left: 6.66667%;
  padding-right: 4.44444%;
}
.can-do {
  padding: 10vh;
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  display: inline-block;
  text-transform: uppercase;
  margin-bottom: 3rem;
  line-height: 1.5;
  font-size: 1.6rem;
  letter-spacing: 0.2px;
}
.can-do-content {
  padding: 0 10vh;
  line-height: 1.14894;
  font-size: 2.35rem;
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  font-weight: 300;
}
</style>