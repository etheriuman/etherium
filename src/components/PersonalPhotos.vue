<template>
  <div class="photo-wrapper">
    <div v-for="(photo, index) of photos" :key="index" class="photo">
      <img :src="photo" alt="photo">
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'personal-photos',
  computed: {
    ...mapState(['photos'])
  }
}
</script>

<style scoped>
.photo-wrapper {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
}
.photo {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.photo img {
  display: block;
  width: 100%;
  height: 100%;
  
  object-fit: cover;
}
</style>