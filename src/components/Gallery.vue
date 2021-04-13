<template>
  <div class="gallery">
    <div class="gallery-item neumorphism" v-for="project in projectsShown" :key="project.title">
      <div class="project-img">
        <a :href="project.url" target="_blank">
          <img :src="project.img" alt="project-image">
          <span v-if="language === 'EN'" class="project-visit">visit website</span>
          <!-- sep -->
          <span v-else class="project-visit">來去網站逛逛</span>
        </a>
      </div>
      <div class="project-content">
        <p class="content-title">{{ project.title }}</p>
        <p class="content-description">{{ project.description }}</p>
        <p class="content-tags"><span v-for="(tag, index) in project.tags" :key="index" class="tag">{{ tag }}</span></p>
        <a class="link-github" :href="project.github" target="_blank">
          <img src="./../icons/github.svg" alt="github-link">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    filteringKeys: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      projectsShown: []
    }
  },
  computed: {
    ...mapState(['language', 'projectsCH', 'projectsEN'])
  },
  methods: {
    filterWithKeys(keyArr) {
      if (!keyArr.length) {
        return
      }
      this.projectsShown = this.projectsShown.filter(project => {
        return keyArr.every(tag => project.tags.includes(tag))
      })
    },
    projectsShownChange(language, keyArr) {
      if (language === 'EN') {
        this.projectsShown = [...this.projectsEN]
        this.filterWithKeys(keyArr)
        return
      }
      this.projectsShown = [...this.projectsCH]
      this.filterWithKeys(keyArr)
    }
  },
  watch: {
    // language change
    language(data) {
      this.projectsShownChange(data, this.filteringKeys)
    },
    filteringKeys(data) {
      this.projectsShownChange(this.language, data)
    }
  },
  mounted() {
    // check current language
    this.projectsShownChange(this.language, this.filteringKeys)
  }
}
</script>

<style scoped>
.gallery {
  display: flex;
  flex-flow: column;
}
.gallery-item {
  position: relative;
  display: flex;
  flex-flow: column;
  margin-bottom: 40px;
  border-radius: 25px;
  overflow: hidden;
}
.project-img {
  position: relative;
  width: 100%;
  max-height: 250px;
  overflow: hidden;
}
.project-img img {
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
}
.project-visit {
  position: absolute;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 50%);
  right: -90px;
  bottom: 15px;
  padding: 0 10px 0 15px;
  background: var(--colorSecondary);
  color: #e3e3e3;
  transition: right .3s ease-out;
}
.project-img:hover .project-visit {
  right: 0;
  transition: right .3s ease-out;
}
.project-content {
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 15px 15px 15px 20px;
}
.content-title {
  position: relative;
  font-size: 1.2rem;
  margin-bottom: 10px;
  padding-right: 30px;
}
.content-description {
  margin-bottom: 25px;
}
.content-tags .tag{
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 2px 5px;
  border: 1px solid var(--colorSecondary);
  border-radius: 5px;
}
.link-github {
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 20px;
}
.link-github img {
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 768px) {
.gallery-item {
  flex-flow: row;
  min-height: 220px;
}
.project-img {
  width: 40%;
}
.project-content {
  width: 60%;
}
.content-title {
  font-size: 1.5rem;
}
}
</style>