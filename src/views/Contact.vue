<template>
  <section class="contact">
    <p v-if="language === 'EN'" class="section-title primary">Contact me</p>
    <!-- sep -->
    <p v-else class="section-title primary">與我聯繫</p>
    <div class="contact-container">
      <div class="contact-form">
        <p class="contact-description" v-if="language === 'EN'">
          Feel free to contact me anytime! And it'll be my pleasure to get any suggestions about my work. I'm now looking for a web developer opening, if you're interested please let me know! Thank you.
        </p>
        <!-- sep -->
        <p class="contact-description" v-else>
          如果你願意，歡迎隨時與我聯繫！如果對於我的作品有什麼想法也很歡迎批評與指教。目前正在尋找一個適合的地方一展長才，如果你想更深入暸解我或是認為我可能是你們在找的人，請不吝寄出聯繫信件！謝謝！
        </p>
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
</template>

<script>
import Map from './../components/Map'
import { mapState } from 'vuex'

export default {
  components: {
    Map
  },
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style scoped>
section {
  width: 100%;
  padding: 20px 50px;
}
.section-title {
  font-size: 40px;
  margin-bottom: 30px;
}
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
.contact-description {
  margin-bottom: 50px;
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
}
.contact-map {
  height: 500px;
}
}

/* ---------- media > 900px ---------- */
@media screen and (min-width: 900px) {
.section-title {
font-size: 50px;
}
.contact-container {
  flex-flow: row;
}
.contact-description {
  padding-right: 20px;
}
.contact-form {
  padding-right: 30px;
}
.contact-map {
  height: 70vh;
}
}
</style>