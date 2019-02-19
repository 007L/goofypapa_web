import * as types from './types.js'
import {setStore} from '../common/utils/storageUtil'


import {
  ANIMAL,
  LESSON,
  USER,
  COMMENT,
  PSYLESSON,
  CLOSE_SIDEBAR,
  TOGGLE_DEVICE,
  SET_LANGUAGE ,
  TOGGLE_SIDEBAR
} from './types'


//actions常用于异步更改状态。也就是说它一般用来先发送请求，然后再commit

//下面的代码可以说没必要。没发请求，多此一举。因为项目很久之前写的，这里我就不做大更改了，更改看下面
//对于vuex不是很理解的可不看下面，先跟着我先的代码走一遍，之后思想明了，自己再做更改即可。写代码就是这样，刚开始难以写一手漂亮的代码。
//直接在页面发送请求后再store.commit()是完全可以的
export default {
  requestanimal({commit} , cd) {
    console.log(123)
    $.ajax({
      type: "post",
      url: "http://www.dadpat.com/animal/list.do",
      dataType: "jsonp",
      async: true,
      success: function (data) {

        const animals = data.data
        setStore('animals',animals)
        commit(ANIMAL, {animals})
      }
    });

  },

  requestLesson({commit} , cd) {
    console.log(456)
    $.ajax({
      type: "post",
      url: "http://www.dadpat.com/course/list.do",
      dataType: "jsonp",
      data:{courseType:0},
      async: true,
      success: function (data) {

        const lessons = data.data
        setStore('lessons',lessons)

        commit(LESSON, {lessons})
      }
    });

  },

  requestpsyLesson({commit} , cd) {
    console.log(456)
    $.ajax({
      type: "post",
      url: "http://www.dadpat.com/course/list.do",
      dataType: "jsonp",
      data:{courseType:1},
      async: true,
      success: function (data) {

        const psylessons = data.data
        setStore('psylessons',psylessons)
        commit(PSYLESSON, {psylessons})
      }
    });

  },



  requestUser({commit} , loginForm) {
    console.log(loginForm)
    $.ajax({
      type: "post",
      url: "http://www.dadpat.com/user/auth/login.do",
      dataType: "jsonp",
      data:loginForm,
      async: true,
      success: function (data) {

        const user = data.data

        commit(USER, {user})
      }
    });

  },

  ToggleSideBar: ({ commit }) => {
    commit('TOGGLE_SIDEBAR')
  },
  // 中英文
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language)
  },
  CloseSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  ToggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }

}

//改法：
//举个例子：先引入api, 利用载荷拿到参数，然后发送登录请求
// import api from '../axios.js';
// export default {
//     actions需要返回一个promise对象，是用于通知外面该actions执行完毕。（官网有写）
//     UserLogin({ commit }, { username, password }){
//
//        return new Promise((resolve, reject) => {
//             api.userLogin({ username, password})
//                 .then(res => {
//                     //登录成功
//                     if(res.data.success === true){
//                         let token = res.data.data.token;
//                         commit(types.LOGIN, token);
//                         resolve(res.data.success);
//                     }
//                     //登录失败： 用户名或密码错误
//                     if(res.data.success === false){
//                         commit(types.LOGOUT);
//                         resolve(res.data.success)
//                     }
//                 })
//                 .catch(err => {
//                     reject(err);
//                 });
//         });
//
//     }
// }
