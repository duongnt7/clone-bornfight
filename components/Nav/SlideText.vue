<template lang="">
  <div class="slide-text text-left">
    {{text}}
  </div>
</template>
<script>
export default {
  name: "SlideText",
  props: ["text"],
};
</script>
<style scoped>
.slide-text {
  width: 300px;
  margin: 20px 0;
  animation: display 0.4s;
}
@keyframes display {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>