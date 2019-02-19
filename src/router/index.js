import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const mainPage =  resolve => require(['@/components/mainPage/mainPage'],resolve)
const animails =  resolve => require(['@/components/animails/animails'],resolve)
const goods =resolve=> require(['@/components/goods/goods'],resolve)
const lesson =resolve=> require(['@/components/lesson/lesson'],resolve)
const client =resolve=> require(['@/components/client/client1'],resolve)
const ratings =resolve=>require( ['@/components/ratings/ratings'],resolve)
const likes =resolve=> require(['@/components/likes/likes'],resolve)
const message =resolve=> require(['@/components/message/message'],resolve)
const detail =resolve=> require(['@/components/detail/detail'],resolve)
const homepage =resolve=> require(['@/components/homepage/homepage'],resolve)
const lessonDetail =resolve=> require(['@/components/lessonDetail/lessonDetail'],resolve)
const login =resolve=> require(['@/components/loginSign/login'],resolve)
const good_huiben =resolve=> require(['@/components/good_huiben/good_huiben'],resolve)
const goodwanjugu =resolve=> require(['@/components/good_wanjugu/good_wanjugu'],resolve)
const good_wanjugu1 =resolve=> require(['@/components/good_wanjugu1/good_wanjugu1'],resolve)
const babacaicai =resolve=> require(['@/components/babacaicai/babacaicai'],resolve)
const Childbackpack =resolve=> require(['@/components/Childbackpack/Childbackpack'],resolve)
const psychologylesson =resolve=> require(['@/components/psychologylesson/psychologylesson'],resolve)
const psyDetail =resolve=> require(['@/components/psyDetail/psyDetail'],resolve)
const aboutUs =resolve=> require(['@/components/aboutUs/aboutUs'],resolve)
const goTop =resolve=> require(['@/components/goTop/goTop'],resolve)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage,
      meta:{index:0},
      redirect: '/homepage',
      children:[
        {
          path: '/goTop',
          name: 'goTop',
          meta:{index:3},
          component: goTop,
        },
        {
          path: '/homepage',
          name: 'homepage',
          meta:{index:1},
          component: homepage
        },
        {
          path: '/animals',
          name: 'animals',
          meta:{index:3},
          component: animails,
        },
        {
          path: '/detail',
          name: 'detail',
          component: detail
        },
        {
          path: '/goods',
          name: 'goods',
          meta:{index:2},
          component: goods,
          children:[

          ]
        },
        {
          path:'/good_huiben',
          name:'good_huiben',
          component:good_huiben
        },
        {
          path:'/goodwanjugu',
          name:'goodwanjugu',
          component:goodwanjugu
        },
        {
          path:'/good_wanjugu1',
          name:'good_wanjugu1',
          component:good_wanjugu1,
        },
        {
          path:'/babacaicai',
          name:'babacaicai',
          component:babacaicai
        },
        {
          path:'/Childbackpack',
          name:'Childbackpack',
          component:Childbackpack
        },
        {
          path: '/login',
          name: 'login',
          meta:{index:6},
          component: login
        },
        {
          path: '/psychologylesson',
          name: 'psychologylesson',
          meta:{index:5},
          component: psychologylesson,
        },
        {
          path: '/psyDetail',
          name: 'psyDetail',
          component: psyDetail
        },
        {
          path: '/lesson',
          name: 'lesson',
          meta:{index:4},
          component: lesson
        },
        {
          path: '/lessonDetail',
          name: 'lessonDetail',
          component: lessonDetail
        },
        {
          path: '/client',
          name: 'client',
          component: client,
          redirect: '/ratings',
          children:[
            {
              path: '/ratings',
              name: 'ratings',
              component: ratings
            },
            {
              path: '/likes',
              name: 'likes',
              component: likes
            },
            {
              path: '/message',
              name: 'message',
              component: message
            },
          ]
        },
        {
          path: '/aboutUs',
          name: 'aboutUs',
          meta:{index:6},
          component: aboutUs,
        }

      ]
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
