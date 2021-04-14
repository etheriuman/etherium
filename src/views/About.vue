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
        In some of my spare time, I like to dig into the principles of dev tools that I've used through Google,Youtube,MDN,documents and StackOverFlow since it's super cool to know how it works for me. And in the remining time, I read stuffs, search for newest Memes and "talk design" with my friends.
      </p>
      <!-- sep -->
      <p class="about-description" v-else>
        你好我是Ether，是一個熱愛軟體開發、擁有約一年開發經驗的 Web Developer，目前專精於前端開發。過去所學的是產品設計與使用者經驗研究與設計，志在開發出易維護、有彈性，並且提供使用者良好使用體驗的產品。
        <br><br>
        對於 Problem Solving 有著狂熱的執著，喜歡與團隊一同討論、擬定開發策略，共同打造出很棒的產品！對身為開發者的我來說最重要的事情無非是永不停止學習新知、新技術，並且不排斥透過任何可行方法去解決問題！
        <br><br>
        在零碎的閒暇時間我通常會透過 Google與Youtube、MDN、文件、StackOverFlow... 去了解工具與技術的底層原理，在車子跑起來後了解車子怎麼跑起來對我來說是很酷的一件事。其他時間的興趣則是閱讀、瀏覽最新迷因(meme)、與朋友進行產品設計思辨。
      </p>
    </div>
    <!-- my info -->
    <div class="about-low">
      <div class="about-info neumorphism">
        <ul class="info-container">
          <!-- name -->
          <li class="info-item">
            <p class="info-title">
              {{ infoShown.nameTitle }}:
            </p>
            <p class="info-content">
              {{ infoShown.nameContent }}
            </p>
          </li>
          <!-- email -->
          <li class="info-item">
            <p class="info-title">
              {{ infoShown.emailTitle }}:
            </p>
            <p class="info-content">
              {{ infoShown.emailContent }}
            </p>
          </li>
          <!-- education -->
          <li class="info-item">
            <p class="info-title">
              {{ infoShown.educationTitle }}:
            </p>
            <p
              class="info-content"
              v-for="(education, index) in infoShown.educationContent"
              :key="index"
            >
              {{ education }}
            </p>
          </li>
        </ul>
        <!-- cv -->
        <div class="about-cv">
          <div class="cv neumorphism">
            <a v-if="language ==='EN'" class="link" target="_blank" href="https://github.com/etheriuman">
              Check out CV
            </a>
            <!-- sep -->
            <a v-else class="link" target="_blank" href="https://github.com/etheriuman">
              瀏覽簡歷
            </a>
          </div>
        </div>
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
      </div>
      <div class="about-vedio about-info neumorphism">
        <div class="iframe-outer">
          <div class="iframe-mask">
            <iframe :src="infoShown.vedioUrl + '?modestbranding=1&rel=0'" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Canvas from './../components/Canvas'
import { mapState } from 'vuex' 

export default {
  components: {
    // Canvas
  },
  data() {
    return {
      infoShown: {},
    }
  },
  computed: {
    ...mapState(['language', 'aboutInfoEN', 'aboutInfoCH'])
  },
  methods: {
    onLanguageChange(language) {
      if (language === 'EN') {
        this.infoShown = {...this.aboutInfoEN}
        return
      }
      this.infoShown = {...this.aboutInfoCH}
    }
  },
  watch: {
    language(language) {
      this.onLanguageChange(language)
    }
  },
  mounted() {
    // check current language
    this.onLanguageChange(this.language)
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
  margin-bottom: 50px;
}
.about-photo {
  width: 220px;
  height: 220px;
  margin: 0 auto;
  padding: 15px;
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
  padding: 0 20px;
}
/* about info */
.about-low {
  width: 100%;
  display: flex;
  flex-flow: column-reverse;
  justify-content: space-between;
}
.about-info {
  width: 100%;
  border-radius: 25px;
  padding: 15px 30px;
  margin-bottom: 25px;
}
.info-container {
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 30px;
}
.info-item {
  width: 100%;
  margin-bottom: 15px;
}
.info-title {
  margin-bottom: 5px;
  position: relative;
}
.info-title::before {
  content: '';
  display: block;
  position: absolute;
  width: 5px;
  height: 5px;
  top: 8px;
  left: -8px;
  border-radius: 50%;
  background: var(--colorSecondary);
}
.info-content {
  margin: 5px 0 0 20px;
}
/* cv */
.about-cv {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.cv {
  width: 70%;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
}
.cv a {
  display: block;
  width: 100%;
  height: 100%;
}
/* about footer */
.about-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
.footer-item {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 0 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-item a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}
.footer-item a img {
  display: block;
  line-height: 40px;
  width: 20px;
  height: 20px;
}
.about-vedio {
  padding: 20px;
}
.iframe-outer {
  width: 100%;
  height: 100%;
}
.iframe-mask {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
}
.about-vedio iframe {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 15px;
  overflow: hidden;
  z-index: -1;
}
/* ---------- media > 576px ---------- */
@media screen and (min-width: 576px) {
section {
  padding: 30px 50px;
}
.about-low {
  padding: 0 20px;
}
.about-info {
  padding: 30px 40px 20px 40px;
}
.about-vedio {
  padding: 20px;
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
  margin-right: 50px;
}
.about-description {
  width: 70%;
}
.about-low {
  padding: 0;
  flex-flow: row;
}
.about-info {
  width: calc(50% - 15px);
  padding: 30px 40px 20px 40px;
}
.about-vedio {
  padding: 20px;
}
}
</style>

