import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'EN',
    projectsEN: [
      {
        title: 'Simple Twitter',
        description: 'A web application ispired by Twitter, built with Vue and Bootstrap.Users can sign in and available to store data into database or get data from database through server. For more information, please checkout out the GitHub repo. Guest account: user1/12345678.',
        url: 'https://etheriuman.github.io/twitter-frontend/',
        img: 'https://i.imgur.com/XRQYv8Q.png?1',
        github: 'https://github.com/etheriuman/twitter-frontend',
        tags: [
          'Javascript',
          'Vue',
          'Vuex',
          'Socket.io',
          'Postman',
          'REST API',
          'Bootstrap'
        ]
      },
      {
        title: 'Personal website - Etherium',
        description: 'Personal website for showing some "Home made" works,  using neumorphism UI design. Import Google Map API, let the audience know more about me.',
        url: '',
        img: 'https://i.imgur.com/pFN6ALH.png',
        github: 'https://github.com/etheriuman/etherium',
        tags: [
          'Javascript',
          'Vue',
          'Vuex',
          'GoogleMap API',
          'Formspree',
          'Bootstrap'
        ]
      },
      {
        title: 'Restaurant Forum',
        description: 'The web app provides food lovers collect their favorite restaurants, and share amazing restaurants with others. With complete CRUD API methods, users connect with each other in this application. Guest account: user1@example.com/12345678',
        url: 'https://etheriuman.github.io/restaurants-forum-vue/',
        img: 'https://i.imgur.com/aQlgU4a.png',
        github: 'https://github.com/etheriuman/restaurants-forum-vue',
        tags: [
          'Javascript',
          'Vue',
          'Vuex',
          'Postman',
          'REST API',
          'Bootstrap'
        ]
      }
    ],
    projectsCH: [
      {
        title: 'Twitter-like 社群網站',
        description: '參考Twitter所打造的社群網站。由前後端工程師共同完成，以REST API溝通資料進行資料的CRUD，提供使用者向伺服器請求、修改與刪除資料的功能，並利用RWD讓頁面在不同裝置之間都能良好運作。導入Socket.io，實作即時聊天功能、發送私人信息與社群網站通知功能。測試帳密為：user1/12345678。',
        url: 'https://etheriuman.github.io/twitter-frontend/',
        img: 'https://i.imgur.com/XRQYv8Q.png?1',
        github: 'https://github.com/etheriuman/twitter-frontend',
        tags: [
          'Javascript',
          'Vue',
          'Vuex',
          'Socket.io',
          'Postman',
          'REST API',
          'Bootstrap'
        ]
      },
      {
        title: '個人網站 Etherium',
        description: '用現在手上有的開發技能與工具親手打造一個 Personal Website。用了一直想實作看看的擬真式 UI design，並導入 GoogleMap API，讓想暸解我的各位看官們知道一下小弟住在台北市北投捷運站這邊，有空可以來聊聊天。',
        url: '',
        img: 'https://i.imgur.com/pFN6ALH.png',
        github: 'https://github.com/etheriuman/etherium',
        tags: [
          'Javascript',
          'Vue',
          'Vuex',
          'GoogleMap API',
          'Formspree',
          'Bootstrap'
        ]
      },
      {
        title: '餐廳評論網',
        description: '餐廳評論網提供使用者發布分享餐廳資訊、瀏覽全部或特定篩選的餐廳清單，亦可將中意的餐廳加入收藏、對餐廳做出評論。以此平台匯聚更多美食愛好者共同開發各地潛在美味餐廳！身為管理者則能從後台管理所有餐廳與使用者，對不恰當的內容做刪除。測試帳密為：user1@example.com/12345678。',
        url: 'https://etheriuman.github.io/restaurants-forum-vue/',
        img: 'https://i.imgur.com/aQlgU4a.png',
        github: 'https://github.com/etheriuman/restaurants-forum-vue',
        tags: [
          'Javascript',
          'Vue',
          'Vuex',
          'Postman',
          'REST API',
          'Bootstrap'
        ]
      }
    ],
    tags: [
      'Javascript',
      'Vue',
      'Vuex',
      'Socket.io',
      'Postman',
      'REST API',
      'GoogleMap API',
      'Formspree',
      'Postman',
      'Bootstrap'
    ],
    aboutInfoEN: {
      nameTitle: 'Name',
      nameContent: 'Ether Huang',
      emailTitle: 'Email',
      emailContent: 'timmy26291125@gmail.com',
      educationTitle: 'Education',
      educationContent: [
        'Bachelor degree in product design, SCU',
        'Fullstack development program(major in front-end), ALPHAcamp'
      ],
      vedioUrl: 'https://www.youtube.com/embed/OYYCqufmqEg'
    },
    aboutInfoCH: {
      nameTitle: '姓名',
      nameContent: '黃彥臻',
      emailTitle: '聯絡信箱',
      emailContent: 'timmy26291125@gmail.com',
      educationTitle: '教育背景',
      educationContent: [
        '實踐大學 - 工業產品設計系',
        'ALPHAcamp - 全端開發學程(主修前端)'
      ],
      vedioUrl: 'https://www.youtube.com/embed/iNbI-cWPsGo'
    }
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language
      localStorage.setItem('language', language)
    }
  },
  actions: {},
  modules: {}
})