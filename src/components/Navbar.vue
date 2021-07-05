<template>
  <div class="nav">
    <div v-show="isOpen" class="nav-container">
      <!-- logo -->
      <div class="nav-topic">
        <div @click.prevent.stop="closeNavbar()" class="nav-logo">
          <router-link class="link" to="/">
          </router-link>
        </div>
        <div @click.prevent.stop="closeNavbar()" class="topic-name">
          <router-link class="link" to="/">
            <span class="secondary logo">Ether</span><span>Huang</span>
          </router-link>
        </div>
        <p class="topic-position">Front-end developer</p>
      </div>
      <ul class="nav-content">
        <li @click.prevent.stop="closeNavbar()" class="nav-item neumorphism">
          <router-link class="link" to="/about">
            <span v-if="language === 'EN'">About me</span>
            <!-- sep -->
            <span v-else>關於我</span>
          </router-link>
        </li>
        <li @click.prevent.stop="closeNavbar()" class="nav-item neumorphism">
          <router-link class="link" to="/projects">
            <span v-if="language === 'EN'">Projects</span>
            <!-- sep -->
            <span v-else>專案</span>
          </router-link>
        </li>
        <li @click.prevent.stop="closeNavbar()" class="nav-item neumorphism">
          <router-link class="link" to="/contact">
            <span v-if="language === 'EN'">Contact</span>
            <!-- sep -->
            <span v-else>聯繫我</span>
          </router-link>
        </li>
      </ul>
      <!-- footer -->
      <div class="nav-footer">
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
    <!-- open/close navbar -->
    <div
      @click.prevent.stop="toggleNavbar()"
      class="nav-toggle"
      :class="{ rotate: isOpen }"
    >
    </div>
    <!-- switch language -->
    <div
      v-if="language === 'EN'"
      @click.prevent.stop="switchLanguage('CH')"
      class="language-toggle"
    >
    CH
    </div>
    <div
      v-else
      @click.prevent.stop="switchLanguage('EN')"
      class="language-toggle"
    >
    EN
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapState(['language'])
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen
    },
    closeNavbar() {
      this.isOpen = false
    },
    switchLanguage(language) {
      this.$store.commit('setLanguage', language)
    }
  }
}
</script>

<style scoped>
.nav-toggle {
  position: fixed;
  width: 20px;
  height: 20px;
  background-image: url('./../icons/plus.svg');
  top: 35px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  transform: rotate(0);
  transition: transform .1s ease-out;
}
.language-toggle {
  position: fixed;
  width: 20px;
  height: 20px;
  text-align: center;
  top: 85px;
  right: 22px;
  z-index: 1000;
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 20px;
}
.rotate {
  transform: rotate(45deg);
  transform-origin: center;
  transition: transform .1s ease-out;
}
.nav-topic {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.topic-name a{
  width: 135px;
  display: flex;
  justify-content: space-between;
}
.topic-name span {
  font-size: 1.5rem;
  position: relative;
}
.topic-name .logo::after {
  content: 'Ether';
  color: var(--colorPrimary);
  position: absolute;
  left: 2px;
  top: -3px;
}
.nav-logo {
  display: block;
  margin: 0 auto;
  width: 120px;
  height: 120px;
  background-image: url('./../imgs/logo.svg');
  background-repeat: no-repeat;
}
.nav-container {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  background: #e3e3e3;
  padding: 30px 50px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.nav-content {
  width: 100%;
  height: 50%;
  padding: 0;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
}
.link {
  display: block;
  width: 100%;
  height: 100%;
}
.nav-item {
  width: 50%;
  max-width: 500px;
  height: 60px;
  border-radius: 25px;
  text-align: center;
  line-height: 60px;
}
.nav-footer {
  width: 100%;
  display: flex;
  justify-content: center;
}
.footer-item {
  width: 40px;
  height: 40px;
  margin: 15px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
}
.footer-item a {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-item a img {
  display: block;
  width: 20px;
  height: 20px;
}
/* ---------- media > 576px ---------- */
@media screen and (min-width: 576px) {
.nav-logo {
  width: 150px;
  height: 150px;
}
}
</style>