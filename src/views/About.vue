<template>
  <section class="about">
    <p v-if="language === 'EN'" class="section-title primary">About me</p>
    <!-- sep -->
    <p v-else class="section-title primary">關於我</p>
    <!-- about-container -->
    <div class="about-container">
      <div class="about-photo neumorphism">
        <img src="./../imgs/photo.jpg" alt="my-photo">
      </div>
      <p class="about-description" v-if="language === 'EN'">
        I'm a web developer based in Taipei, Taiwan. I have about 1 year of web development experience, and willing to have more in the future. Due to my bachelor of product design, I have a good sense of giving a nice user experience.
        <br><br>
        Love solving problems, coworking and Highly interested in techs, sience and design. To me, stay curios about everything and never stop learning is the most important thing for a developer.
        <br><br>
        In some of my spare time, I like to understand principles of dev tools that I've used through Google,Youtube,MDN,documents and StackOverFlow since it's super cool to know how it works for me. And in the remining time, I read stuffs, search for newest Memes and "talk design" with my friends.
      </p>
      <p class="about-description" v-else>
        你好我是Ether，是一個熱愛軟體開發、擁有約一年開發經驗的 Web Developer，目前專精於前端開發。過去所學的是產品設計與使用者經驗研究與設計，志在開發出易維護、有彈性，並且提供使用者良好使用體驗的產品。
        <br><br>
        對於 Problem Solving 有著狂熱的執著，喜歡與團隊一同討論、擬定開發策略，共同打造出很棒的產品！對身為開發者的我來說最重要的事情無非是永不停止學習新知、新技術，並且不排斥透過任何可行方法去解決問題！
        <br><br>
        在零碎的閒暇時間我通常會透過 Google與Youtube、MDN、文件、StackOverFlow... 去了解工具與技術的底層原理，在車子跑起來後了解車子怎麼跑起來對我來說是很酷的一件事。其他時間的興趣則是閱讀、瀏覽最新迷因(meme)、與朋友進行產品設計思辨。
      </p>
    </div>
    <!-- about-canvas -->
    <Canvas />
    <!-- about-footer -->
    <div class="about-footer">
      <div class="footer-item neumorphism">
        <a class="link" target="_blank" href="https://github.com/etheriuman">
          <img src="./../icons/github.svg" alt="github-link">
        </a>
      </div>
      <div class="footer-item neumorphism">
        <a class="link" target="_blank" href="https://etherhuang.medium.com/">
          <img src="./../icons/medium.svg" alt="medium-link">
        </a>
      </div>
      <div class="footer-item neumorphism">
        <a class="link" target="_blank" href="https://www.linkedin.com/in/ether-huang-8834231a3/">
          <img src="./../icons/linkedin.svg" alt="linkedin-link">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Canvas from './../components/Canvas'
import { mapState } from 'vuex' 

export default {
  components: {
    Canvas
  },
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style scoped>
section {
  width: 100%;
  padding: 15px 25px;
}
.section-title {
  font-size: 40px;
  margin-bottom: 30px;
}
.about-container {
  width: 100%;
  display: flex;
  flex-flow: column;
}
.about-photo {
  width: 220px;
  height: 220px;
  margin: 0 auto;
  padding: 25px;
  border-radius: 25px;
  margin-bottom: 40px;
}
.about-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}
.about-description {
  width: 100%;
}
.about-footer {
  width: 100%;
  display: flex;
  justify-content: center;
}
.footer-item {
  width: 40px;
  height: 40px;
  margin: 20px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-item a {
  display: block;
  width: 20px;
  height: 20px;
}
.footer-item a img {
  display: block;
  width: 100%;
  height: 100%;
}
/* ---------- media > 576px ---------- */
@media screen and (min-width: 576px) {
section {
  padding: 30px 50px;
}
}

/* ---------- media > 900px ---------- */
@media screen and (min-width: 900px) {
.section-title {
  font-size: 50px;
}
.about-container {
  flex-flow: row;
  align-items: center;
}
.about-photo {
  margin: 0;
  margin-right: 60px;
}
.about-description {
  width: 70%;
}
}
</style>

