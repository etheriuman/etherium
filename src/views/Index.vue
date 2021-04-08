<template>
  <div class="index">
    <section class="intro">
      <div class="logo"><span>...</span></div>
      <p>Hi,</p>
      <p>I'm <span class="name secondary">Ether</span>,</p>
      <p>web developer</p>
      <div class="intro-contact">
        <button class="neumorphism">
          <router-link class="link" to="/contact">
            Contact me!
          </router-link>
        </button>
        <div class="hint"></div>
      </div>
    </section>
    <section class="projects">
      <p class="section-title primary">Projects</p>
      <Gallery />
    </section>
    <section class="contact">
      <p class="section-title primary">Contact me</p>
      <div class="contact-container">
        <div class="contact-form">
          <form action="https://formspree.io/f/mzbybjdj" method="POST" class="contact-form" autocomplete="off">
            <input class="neumorphism-reverse" id="input-name" name="name" type="text" placeholder="Name" required/>
            <input class="neumorphism-reverse" id="input-email" name="email" type="email" placeholder="Email" required/>
            <input class="neumorphism-reverse" id="input-subject" name="subject" type="text" placeholder="Subject" required/>
            <textarea class="neumorphism-reverse" id="input-message" name="message" type="text" placeholder="Message" required/>
            <button type="submit" class="neumorphism">Send</button>
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


export default {
  components: {
    Gallery,
    Map
  }
}
</script>

<style scoped>
section {
  width: 100%;
  padding: 30px 50px;
  margin-bottom: 100px;
}
.section-title {
  font-size: 50px;
  margin-bottom: 50px;
}
/* ---------- intro ---------- */
.logo {
  width: 230px;
  height: 230px;
  background-image: url('./../imgs/logo.svg');
  margin-bottom: 20px;
}
.name {
  font-size: 70px;
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
  font-size: 70px;
  line-height: 70px;
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
  margin-right: 100px;
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
.contact-map {
  height: 500px;
}
}
/* ---------- media > 900px ---------- */
@media screen and (min-width: 900px) {
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

