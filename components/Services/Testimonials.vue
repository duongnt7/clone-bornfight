<template lang="">
  <div class='testimonials'>
    <div class='flex items-center tes-content'>
      <div class='w-full'>
        <img src='https://www.bornfight.com/wp-content/uploads/2018/08/grubisic-1.png'/>
      </div>
      <div>
        <div class='tes-caption'>“We believe that we can live in a world where every product or service has an easy to use experience on all platforms. And our mission is to make it happen.”</div>
        <div>
          <p class='tes-ceo'>Tomislav Grubišić</p>
          <p>CEO</p>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
export default {
  name: "Testimonials",
};
</script>
<style scoped>
.testimonials {
  background: #edf0f7;
  color: #000;
  padding: 5% 5% 5% 20%;
}
.tes-caption {
  margin-bottom: 2rem;
  line-height: 1.2;
  font-size: 1.5rem;
}
.tes-ceo {
  font-weight: 500;
}
</style>