import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        title: 'Simple Twitter',
        tags: [
          'Javascript',
          'Vue',
          'Vuex',
          'Socket.io',
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