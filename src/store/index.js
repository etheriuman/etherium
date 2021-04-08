import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        title: 'Simple Twitter',
        description: 'A web application ispired by Twitter, built with Vue and Bootstrap.Users can sign in and available to store data into database or get data from database through server. For more information, please checkout out the GitHub repo.',
        url: 'https://etheriuman.github.io/twitter-frontend/',
        img: 'https://i.imgur.com/XRQYv8Q.png?1',
        github: 'https://github.com/etheriuman/twitter-frontend',
        tags: [
          'Javascript',
          'Vue',
          'Vuex',
          'Socket.io',
          'Postman',
          'REST API'
        ]
      },
      {
        title: 'Personal website - Etherium',
        description: 'Personal website for showing some "Home made" works,  using neumorphism UI design. Import google map API, let the audience know more about me.',
        url: '',
        img: 'https://i.imgur.com/pFN6ALH.png',
        github: 'https://github.com/etheriuman/etherium',
        tags: [
          'Javascript',
          'Vue',
          'Vuex',
          'GoogleMap API'
        ]
      },
      {
        title: 'Restaurant Forum',
        description: 'The web app provides food lovers collect their favorite restaurants, and share amazing restaurants with others. With complete CRUD API methods, users connect with each other in this application.',
        url: 'https://etheriuman.github.io/restaurants-forum-vue/',
        img: 'https://i.imgur.com/aQlgU4a.png',
        github: 'https://github.com/etheriuman/restaurants-forum-vue',
        tags: [
          'Javascript',
          'Vue',
          'Vuex',
          'Postman',
          'REST API'
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})