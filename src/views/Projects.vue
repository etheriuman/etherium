<template>
  <section class="projects">
    <p v-if="language === 'EN'" class="section-title primary">Projects</p>
    <!-- sep -->
    <p v-else class="section-title primary">專案</p>
    <div class="filter-bar">
      <p v-if="language === 'EN'" class="filter-title">filter tags</p>
      <!-- sep -->
      <p v-else class="filter-title">篩選標籤</p>
      <div class="all-keys neumorphism-reverse">
        <span
          v-for="(key, index) in filterKeys"
          :key="index" class="tag"
          @click.prevent.stop="addFilterKey(key)"
        >
          {{ key }}
        </span>
      </div>
      <div class="filter-keys">
        <template v-if="filteringKeys.length">
          <p v-if="language === 'EN'" class="filter-title">filtering</p>
          <!-- sep -->
          <p v-else class="filter-title">篩選中</p>
          <div class="all-keys neumorphism-reverse">
            <span
              v-for="(key, index) in filteringKeys"
              :key="index" class="tag"
              @click.prevent.stop="removeFilterKey(key)"
            >
              {{ key }}   &#x2717;
            </span>
          </div>
        </template>
      </div>
    </div>
    <Gallery :filtering-keys="filteringKeys" />
  </section>
</template>

<script>
import Gallery from './../components/Gallery'
import { mapState } from 'vuex'

export default {
  components: {
    Gallery
  },
  data() {
    return {
      filterKeys: [],
      filteringKeys: []
    }
  },
  methods: {
    addFilterKey(key) {
      if (this.filteringKeys.includes(key)) {
        return
      }
      this.filterKeys = this.filterKeys.filter(_key => _key !== key)
      this.filteringKeys = [...this.filteringKeys, key]
    },
    removeFilterKey(key) {
      this.filterKeys = [...this.filterKeys, key]
      this.filteringKeys = this.filteringKeys.filter(_key => _key !== key)
    }
  },
  computed: {
    ...mapState(['language', 'tags'])
  },
  created() {
    this.filterKeys = [...this.tags]
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
.filter-bar {
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 50px;
}
.filter-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
}
.all-keys {
  width: 100%;
  padding-left: 25px;
  margin-bottom: 25px;
  min-height: 50px;
  border-radius: 25px;
  padding: 25px;
  display: flex;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
}
.tag{
  display: inline-block;
  height: 25px;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 2px 5px;
  background: var(--colorSecondary);
  color: #e3e3e3;
  border-radius: 5px;
  cursor: pointer;
}
/* ---------- media > 576px ---------- */
@media screen and (min-width: 576px) {
section {
  padding: 30px 50px;
}
.all-keys {
  width: 70%;
}
}
/* ---------- media > 900px ---------- */
@media screen and (min-width: 900px) {
.section-title {
  font-size: 50px;
}
}
</style>