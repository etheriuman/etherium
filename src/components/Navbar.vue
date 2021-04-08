<template>
  <div class="nav">
    <div v-show="isOpen" class="nav-container">
      <!-- logo -->
      <div class="nav-topic">
        <div @click.prevent.stop="closeNavbar()" class="nav-logo">
          <router-link class="link" to="/">
          </router-link>
        </div>
        <p class="topic-name">Ether Huang</p>
        <p class="topic-position">Front-end developer</p>
      </div>
      <ul class="nav-content">
        <li @click.prevent.stop="closeNavbar()" class="nav-item neumorphism">
          <router-link class="link" to="/about">
            <span>About</span>
          </router-link>
        </li>
        <li @click.prevent.stop="closeNavbar()" class="nav-item neumorphism">
          <router-link class="link" to="/projects">
            <span>Projects</span>
          </router-link>
        </li>
        <li @click.prevent.stop="closeNavbar()" class="nav-item neumorphism">
          <router-link class="link" to="/contact">
            <span>Contact</span>
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
    <div class="nav-toggle">
      <span @click.prevent.stop="toggleNavbar()" v-if="!isOpen">+</span>
      <span @click.prevent.stop="toggleNavbar()" v-else>x</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen
    },
    closeNavbar() {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
.nav-toggle {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 1000;
  cursor: pointer;
}
.nav-topic {
  width: 100%;
  text-align: center;
}
.topic-name {
  font-size: 1.5rem;
}
.nav-logo {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  background-image: url('./../imgs/logo.svg');
  background-repeat: no-repeat;
}
.nav-container {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
  background: #e3e3e3;
  padding: 30px 50px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
}
.nav-content {
  width: 100%;
  height: 50%;
  padding: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.link {
  display: block;
  width: 100%;
  height: 100%;
}
.nav-item {
  width: 50%;
  height: 60px;
  border-radius: 25px;
  margin-bottom: 30px;
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
  margin: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
}
.footer-item a img {
  width: 20px;
  height: 20px;
}
</style>