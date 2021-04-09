<template>
  <section class="projects">
    <p v-if="language === 'EN'" class="section-title primary">Projects</p>
    <!-- sep -->
    <p v-else class="section-title primary">專案</p>
    <Gallery />
  </section>
</template>

<script>
import Gallery from './../components/Gallery'
import { mapState } from 'vuex'

export default {
  components: {
    Gallery
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
}
</style>