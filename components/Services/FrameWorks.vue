<template lang="">
  <div class='frameworks'>
    <div class='fw-header'>
      <div class='fw-header__title'>
        <div>Language and</div>
        <div>Frameworks</div>
      </div>
      <div>Whatever the field or platform, we can create it</div>
    </div>
    <div class='fw-list mr-32 mt-16 mb-32'>
      <ul class='flex justify-between'>
        <li v-for="(detail, index) in listFrameworks" :key="index" class='fw-item'>
          <p class='fw-type'>{{detail.type}}</p>
          <ul>
            <li v-for="(item, index2) in detail.detail" :key="index2" class='fw-detail'>
              {{item}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class='relative inline-block'>
      <NuxtLink to='/companies/bornfight'><div class='block view-link'>View stack share</div></NuxtLink>
    </div>
    <div class='flex justify-between mt-32 mr-32 approach'>
      <div class='w-full'>
        <div class='approach-title'>
          Approach the&nbsp;Unknown &amp;&nbsp;Known 
        </div>
      </div>
      <div class='w-full'>
        <ImageOpenFade image='https://www.bornfight.com/wp-content/uploads/2018/08/services-03_320x320_acf_cropped.jpg' bgColor='#4B4B4B' size='width' side='right'/>
      </div>
    </div>
  </div>
</template>
<script>
import ImageOpenFade from "./ImageOpenFade";
export default {
  name: "FrameWorks",
  components: { ImageOpenFade },
  data() {
    return {
      listFrameworks: [
        {
          type: "BACK-END & DATA",
          detail: [
            "PHP (Symfony)",
            "Node.js (Typescript)",
            "MySQL",
            "MariaDB",
            "PostgreSQL",
            "MongoDB",
            "Kafka",
            "Redis",
          ],
        },
        {
          type: "FRONT-END",
          detail: [
            "HTML",
            "CSS",
            "Sass (SCSS)",
            "JavaScript (ES6)",
            "Vue.js",
            "React",
            "GSAP",
          ],
        },
        {
          type: "MOBILE",
          detail: [
            "Kotlin",
            "Swift",
            "RxSwift",
            "RxJava",
            "Realm",
            "ARKit",
            "ARCore",
          ],
        },
        {
          type: "DEVOPS & CLOUD",
          detail: ["AWS", "Ansible", "Jenkins"],
        },
      ],
    };
  },
};
</script>
<style scoped>
.frameworks {
  color: #000;
  padding: 10% 0 10% 20%;
}
.fw-header__title {
  line-height: 1.25;
  font-size: 2.35rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.fw-type {
  line-height: 1.5;
  font-size: 1rem;
  letter-spacing: 0.2px;
  font-weight: 700;
  padding: 0.75rem 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
.fw-detail {
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.fw-item {
  width: 20%;
}
.approach-title {
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  line-height: 1.25;
  font-size: 3.35rem;
  font-weight: 500;
}
</style>
