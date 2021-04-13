<template lang="">
  <div class='article'>
    <div class='flex flex-wrap article-list'>
      <div v-for="(article, index) in listArticle" :key="index" class='article-item'>
        <NuxtLink :to='article.link'>
          <img :src='article.image' class='article-item-img' />
          <div class='article-caption'>
            <h4 class='caption-name'>{{article.name}}</h4>
            <div class='caption-content'>{{article.content}}</div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  data() {
    return {
      listArticle: [
        {
          name: "Mobile applications",
          content:
            "Apps that wil make your customers want to keep your business close to them.",
          image:
            "https://www.bornfight.com/wp-content/uploads/2020/01/bornfight_mobile_landing_header-scaled.jpg",
          link: "",
        },
        {
          name: "Custom software ",
          content:
            "Software that serves your unique business processes and solves specific problems. ",
          image:
            "https://www.bornfight.com/wp-content/uploads/2020/02/header-bornfight-custom-software-development-scaled.jpg",
          link: "",
        },
        {
          name: "Websites ",
          content:
            "Web platforms that grow your business and evolve your users’ experience. ",
          image:
            "https://www.bornfight.com/wp-content/uploads/2020/02/bornfight_websites_desktop_header-scaled.jpg",
          link: "",
        },
        {
          name: "Quality assurance ",
          content:
            "Fix errors, bugs and defects through structured and continuous testing. ",
          image:
            "https://www.bornfight.com/wp-content/uploads/2020/04/qa_header2.jpg",
          link: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
.article {
  background: #daddea;
  color: #000;
  padding: 5% 0% 10% 20%;
}
.article-item {
  margin-bottom: 2rem;
  margin-right: 2rem;
  width: 28%;
  overflow: hidden;
}
.caption-name {
  font-size: 20px;
  padding: 15px 10px 5px 0;
  font-weight: 500;
  transition: 0.3s;
  transition-delay: 0.1s;
  line-height: 1.5;
  font-size: 1.5rem;
}
.article-item:hover .caption-name {
  transform: translateX(10px);
}
.article-item-img {
  transition: 0.3s;
}
.article-item:hover .article-item-img {
  transform: scale(1.1);
}
.caption-content {
  line-height: 1.5;
  font-size: 1.2rem;
  letter-spacing: 0.2px;
  transition: 0.3s;
  padding-right: 10px;
}
.article-item:hover .caption-content {
  transform: translateX(10px);
}
</style>