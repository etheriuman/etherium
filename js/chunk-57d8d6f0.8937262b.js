(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57d8d6f0"],{"4c1a":function(t,e,a){},"6b3f":function(t,e,a){},"78f8":function(t,e,a){"use strict";a("4c1a")},"87e0":function(t,e,a){t.exports=a.p+"img/photo.f377ce78.jpg"},bc98:function(t,e,a){"use strict";a("6b3f")},f820:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"about"},["EN"===t.language?a("p",{staticClass:"section-title primary"},[t._v("About me")]):a("p",{staticClass:"section-title primary"},[t._v("關於我")]),a("div",{staticClass:"about-container"},[t._m(0),"EN"===t.language?a("p",{staticClass:"about-description"},[t._v(" I'm a web developer based in Taipei, Taiwan. I have about 1 year of web development experience, and willing to have more in the future. Due to my bachelor of product design, I have a good sense of giving a nice user experience. "),a("br"),a("br"),t._v(" Love solving problems, coworking and Highly interested in techs, sience and design. To me, stay curios about everything and never stop learning is the most important thing for a developer. "),a("br"),a("br"),t._v(" In some of my spare time, I like to dig into the principles of dev tools that I've used through Google,Youtube,MDN,documents and StackOverFlow since it's super cool to know how it works for me. And in the remining time, I read stuffs, search for newest Memes and \"talk design\" with my friends. ")]):a("p",{staticClass:"about-description"},[t._v(" 你好我是Ether，是一個熱愛軟體開發、擁有約一年開發經驗的 Web Developer，目前專精於前端開發。過去所學的是產品設計與使用者經驗研究與設計，志在開發出易維護、有彈性，並且提供使用者良好使用體驗的產品。 "),a("br"),a("br"),t._v(" 對於 Problem Solving 有著狂熱的執著，喜歡與團隊一同討論、擬定開發策略，共同打造出很棒的產品！對身為開發者的我來說最重要的事情無非是永不停止學習新知、新技術，並且不排斥透過任何可行方法去解決問題！ "),a("br"),a("br"),t._v(" 在零碎的閒暇時間我通常會透過 Google與Youtube、MDN、文件、StackOverFlow... 去了解工具與技術的底層原理，在車子跑起來後了解車子怎麼跑起來對我來說是很酷的一件事。其他時間的興趣則是閱讀、瀏覽最新迷因(meme)、與朋友進行產品設計思辨。 ")])]),a("div",{staticClass:"about-low"},[a("div",{staticClass:"about-info neumorphism"},[a("ul",{staticClass:"info-container"},[a("li",{staticClass:"info-item"},[a("p",{staticClass:"info-title"},[t._v(" "+t._s(t.infoShown.nameTitle)+": ")]),a("p",{staticClass:"info-content"},[t._v(" "+t._s(t.infoShown.nameContent)+" ")])]),a("li",{staticClass:"info-item"},[a("p",{staticClass:"info-title"},[t._v(" "+t._s(t.infoShown.emailTitle)+": ")]),a("p",{staticClass:"info-content"},[t._v(" "+t._s(t.infoShown.emailContent)+" ")])]),a("li",{staticClass:"info-item"},[a("p",{staticClass:"info-title"},[t._v(" "+t._s(t.infoShown.educationTitle)+": ")]),t._l(t.infoShown.educationContent,(function(e,i){return a("p",{key:i,staticClass:"info-content"},[t._v(" "+t._s(e)+" ")])}))],2)]),a("div",{staticClass:"about-cv"},[a("div",{staticClass:"cv neumorphism"},["EN"===t.language?a("a",{staticClass:"link",attrs:{target:"_blank",href:"https://github.com/etheriuman"}},[t._v(" Check out CV ")]):a("a",{staticClass:"link",attrs:{target:"_blank",href:"https://github.com/etheriuman"}},[t._v(" 瀏覽簡歷 ")])])]),t._m(1)]),a("div",{staticClass:"about-info neumorphism"},[a("PersonalPhotos")],1)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about-photo neumorphism"},[i("img",{attrs:{src:a("87e0"),alt:"my-photo"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about-footer"},[i("div",{staticClass:"footer-item neumorphism"},[i("a",{staticClass:"link",attrs:{target:"_blank",href:"https://github.com/etheriuman"}},[i("img",{attrs:{src:a("c943"),alt:"github-link"}})])]),i("div",{staticClass:"footer-item neumorphism"},[i("a",{staticClass:"link",attrs:{target:"_blank",href:"https://etherhuang.medium.com/"}},[i("img",{attrs:{src:a("87df"),alt:"medium-link"}})])]),i("div",{staticClass:"footer-item neumorphism"},[i("a",{staticClass:"link",attrs:{target:"_blank",href:"https://www.linkedin.com/in/ether-huang-8834231a3/"}},[i("img",{attrs:{src:a("b264"),alt:"linkedin-link"}})])])])}],n=a("5530"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo-wrapper"},t._l(t.photos,(function(t,e){return a("div",{key:e,staticClass:"photo"},[a("img",{attrs:{src:t,alt:"photo"}})])})),0)},r=[],c=a("2f62"),l={name:"personal-photos",computed:Object(n["a"])({},Object(c["b"])(["photos"]))},u=l,h=(a("bc98"),a("2877")),m=Object(h["a"])(u,o,r,!1,null,"cf5abf82",null),f=m.exports,p={components:{PersonalPhotos:f},data:function(){return{infoShown:{}}},computed:Object(n["a"])({},Object(c["b"])(["language","aboutInfoEN","aboutInfoCH"])),methods:{onLanguageChange:function(t){this.infoShown="EN"!==t?Object(n["a"])({},this.aboutInfoCH):Object(n["a"])({},this.aboutInfoEN)}},watch:{language:function(t){this.onLanguageChange(t)}},mounted:function(){this.onLanguageChange(this.language)}},b=p,g=(a("78f8"),Object(h["a"])(b,i,s,!1,null,"e4e0daae",null));e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-57d8d6f0.8937262b.js.map