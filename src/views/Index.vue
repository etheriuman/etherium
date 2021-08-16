<template>
  <div class="index">
    <section class="intro" @mouseenter="mouseIn" @mouseleave="mouseOut">
      <div class="logo">
        <span>...</span>
        <div class="logo-eyes" ref="eyes" :style="{top:eyesMoveY + 'px',left:eyesMoveX+'px'}"></div>
      </div>
      <p v-if="language === 'EN'">Hi,</p>
      <!-- sep -->
      <p v-else>嗨,</p>
      <p v-if="language === 'EN'">I'm <span class="name secondary">Ether</span>,</p>
      <!-- sep -->
      <p v-else>我是 <span class="name secondary">Ether</span>,</p>
      <p v-if="language === 'EN'">web developer</p>
      <!-- sep -->
      <p v-else>前端工程師</p>
      <div class="intro-contact">
        <button class="neumorphism">
          <router-link class="link" to="/contact">
            <span v-if="language === 'EN'">Contact me!</span>
            <!-- sep -->
            <span v-else>與我聯繫</span>
          </router-link>
        </button>
        <div class="hint"></div>
      </div>
    </section>
    <section class="projects">
      <p v-if="language === 'EN'" class="section-title primary">Projects</p>
      <!-- sep -->
      <p v-else class="section-title primary">專案</p>
      <Gallery />
    </section>
    <section class="contact">
      <p v-if="language === 'EN'" class="section-title primary">Contact me</p>
      <!-- sep -->
      <p v-else class="section-title primary">與我聯繫</p>
      <div class="contact-container">
        <div class="contact-form">
          <form action="https://formspree.io/f/mzbybjdj" method="POST" class="contact-form" autocomplete="off">
            <input v-if="language === 'EN'" class="neumorphism-reverse" id="input-name" name="name" type="text" placeholder="Name" required/>
            <!-- sep -->
            <input v-else class="neumorphism-reverse" id="input-name" name="name" type="text" placeholder="你的名稱" required/>
            <input v-if="language === 'EN'" class="neumorphism-reverse" id="input-email" name="email" type="email" placeholder="Email" required/>
            <!-- sep -->
            <input v-else class="neumorphism-reverse" id="input-email" name="email" type="email" placeholder="你的郵件" required/>
            <input v-if="language === 'EN'" class="neumorphism-reverse" id="input-subject" name="subject" type="text" placeholder="Subject" required/>
            <!-- sep -->
            <input v-else class="neumorphism-reverse" id="input-subject" name="subject" type="text" placeholder="標題" required/>
            <textarea v-if="language === 'EN'" class="neumorphism-reverse" id="input-message" name="message" type="text" placeholder="Message" required/>
            <!-- sep -->
            <textarea v-else class="neumorphism-reverse" id="input-message" name="message" type="text" placeholder="訊息" required/>
            <button v-if="language === 'EN'" type="submit" class="neumorphism">Send</button>
            <!-- sep -->
            <button v-else type="submit" class="neumorphism">發送</button>
          </form>
        </div>
        <div class="contact-map neumorphism">
          <Map />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Gallery from './../components/Gallery'
import Map from './../components/Map'
import { mapState } from 'vuex'


export default {
  components: {
    Gallery,
    Map
  },
  data() {
    return {
      isHoveringIntro: true,
      eyesMoveX: 0,
      eyesMoveY: 0
    }
  },
  computed: {
    ...mapState(['language'])
  },
  methods: {
    moveEyes() {
      const intro = document.querySelector('.intro')
      const mousePosition = {
        x: window.event.clientX,
        y: window.event.clientY
      }
      const introStartPoint = {
        x: intro.getBoundingClientRect().left,
        y: intro.getBoundingClientRect().top
      }
      const introDivSize = {
        width: intro.getBoundingClientRect().width,
        height: intro.getBoundingClientRect().height
      }
      const eyesMoveMaxDistance = {
        x: 10,
        y: 3
      }
      const eyesMovePercentage = {
        x: (mousePosition.x - introStartPoint.x) / introDivSize.width,
        y: (mousePosition.y - introStartPoint.y) / introDivSize.height,
      }
      this.eyesMoveX = eyesMoveMaxDistance.x * eyesMovePercentage.x
      this.eyesMoveY = eyesMoveMaxDistance.y * eyesMovePercentage.y
    },
    resetEyesPosition() {
      this.eyesMoveX = 0
      this.eyesMoveY = 0
    },
    mouseIn() {
      this.isHoveringIntro = true
    },
    mouseOut() {
      this.isHoveringIntro = false
      this.resetEyesPosition()
    }
  },
  created() {
    window.addEventListener('mousemove', () => {
      if (this.isHoveringIntro) {
        this.moveEyes()
      }
    })
  }
}
</script>

<style scoped>
section {
  width: 100%;
  position: relative;
  padding: 15px 25px;
  margin-bottom: 60px;
}
.section-title {
  font-size: 40px;
  margin-bottom: 50px;
}
/* ---------- intro ---------- */
.logo {
  width: 150px;
  height: 150px;
  background-image: url('./../imgs/avatar_face.svg');
  position: relative;
  margin-bottom: 20px;
}
.logo-eyes {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-image: url('./../imgs/avatar_eyes.svg');
  position: absolute;
}
.name {
  font-size: 50px;
  position: relative;
  text-shadow:
		-.3rem -.2rem 1rem #fff,
		inset .4rem .5rem .9rem #E3E3E375,
		.3rem .2rem .5rem #88888890,
		inset -.4rem -.5rem .9rem #E3E3E390;
}
.name::after {
  content: 'Ether';
  color: var(--colorPrimary);
  position: absolute;
  left: 5px;
  top: 0px;
}
.intro p {
  font-size: 35px;
  line-height: 50px;
  margin-bottom: 0px;
  white-space: nowrap;
}
.intro-contact {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.intro-contact button {
  width: 150px;
  height: 50px;
  border-radius: 25px;
  line-height: 50px;
}
.hint {
  width: 40px;
  height: 40px;
  position: relative;
  background-image: url('./../icons/right-arrow.svg');
  transform: rotate(90deg);
  /* animation */
  animation: scroll-down 1s infinite ease-in-out;
}
@keyframes scroll-down {
  0% {
    bottom: -20px;
  }
  50% {
    bottom: 0px;
  }
  100% {
    bottom: -20px;
  }
}
.link {
  display: block;
  width: 100%;
  height: 100%;
}
/* ---------- projects ---------- */

/* ---------- contact ---------- */
.contact-container {
  width: 100%;
  display: flex;
  flex-flow: column;
}
/* form */
.contact-form {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
}
.contact-form input,
.contact-form textarea {
  display: block;
  height: 50px;
  width: 100%;
  border-radius: 25px;
  margin-bottom: 30px;
  background: var(--colorBackground);
  padding: 0 20px;
  resize: none;
}
#input-subject {
  width: 100%;
}
#input-message {
  width: 100%;
  min-height: 100px;
  padding-top: 20px;
}
.contact-form button {
  width: 30%;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 30px;
}
/* ---------- map ---------- */
.contact-map {
  width: 100%;
  height: 300px;
  border-radius: 25px;
  padding: 15px;
  overflow: hidden;
}
/* ---------- media > 576px ---------- */
@media screen and (min-width: 576px) {
section {
  padding: 30px 50px;
  margin-bottom: 80px;
}
.section-title {
  font-size: 50px;
}
/* intro */
.logo {
  width: 180px;
  height: 180px;
}
.intro p {
  font-size: 50px;
  line-height: 60px;
  margin-bottom: 5px;
}
.name {
  font-size: 60px;
}
/* contact */
.contact-map {
  height: 500px;
}
}
/* ---------- media > 900px ---------- */
@media screen and (min-width: 900px) {
section {
  margin-bottom: 100px;
}
/* intro */
.logo {
  width: 230px;
  height: 230px;
}
.intro p {
  font-size: 70px;
  line-height: 70px;
  margin-bottom: 10px;
}
.name {
  font-size: 70px;
}
/* contact */
.contact-container {
  flex-flow: row;
}
.contact-form {
  padding-right: 30px;
}
.contact-map {
  height: 340px;
}
}
</style>

