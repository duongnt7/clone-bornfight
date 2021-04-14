<template lang="">
  <div class="fixed navigation">
    <div class="left inline-block navigation-left">
      <span class="navigation-left__first">Service</span>
      <span class="navigation-left__second">Approach</span>
    </div>
    <div class="navigation-right">ESTIMATE PROJECT</div>
  </div>
</template>
<script>
export default {
  name: "Navigation"
};
</script>
<style scoped>
.navigation {
  top: 30px;
  width: 100%;
  background: transparent;
  padding: 0 4% 0 8%;
}
.navigation-left {
  color: #000;
}
.navigation-left__first {
  margin-right: 20px;
}
.navigation-right {
  padding: 10px;
  float: right;
  color: #fff;
  background: #000;
}
.navigation-right:hover {
  color: #000;
  background: #fff;
  border: 1px solid #000;
}
</style>
