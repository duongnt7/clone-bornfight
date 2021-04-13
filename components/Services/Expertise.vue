<template lang="">
  <div class='expertise container-service'>
    <div class='expertise-header'>
      <div>Our</div>
      <div>Expertise</div>
    </div>
    <div class='flex flex-wrap mt-16 expertise-list'>
      <div v-for="(expertise, index) in listExpertise" :key="index" class='mr-8 mb-8 overflow-hidden expertise-item'>
          <img :src='expertise.image' class='expertise-item-img' />
          <div class='expertise-caption'>
            <h4 class='caption-name'>{{expertise.name}}</h4>
            <div class='caption-content'>{{expertise.content}}</div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Expertise",
  data() {
    return {
      listExpertise: [
        {
          name: "Strategy",
          content:
            "The first people you’ll meet are our business, UX and technology experts. Together you'll discuss ideas and opportunities, and then we'll deliver blueprints for the best solution.",
          image:
            "https://www.bornfight.com/wp-content/uploads/2018/08/services-expertise-strategy.jpg",
        },
        {
          name: "Design",
          content:
            "In this stage, we translate the strategic basis of the project into visual design. The aim is to create an impressive experience in the interaction between the brand and the user.",
          image:
            "https://www.bornfight.com/wp-content/uploads/2018/08/services-design.jpg",
        },
        {
          name: "Development",
          content:
            "Our code crafters are included in the project from the very beginning. They create progressive solutions placed on the right platforms to enhance the user experience.",
          image:
            "https://www.bornfight.com/wp-content/uploads/2018/08/services-expertise-development.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.expertise {
  color: #000;
  background: #e1e4ee;
}
.expertise-header {
  font-weight: 500;
  font-size: 4rem;
  line-height: 1.025;
  font-size: 4rem;
  letter-spacing: -3px;
}
.expertise-item {
  width: 28%;
}
.caption-name {
  font-size: 20px;
  padding: 15px 10px 5px 0;
  font-weight: 500;
  line-height: 1.5;
  font-size: 1.5rem;
}
</style>