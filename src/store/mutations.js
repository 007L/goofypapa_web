import * as types from './types.js'
import Cookies from 'js-cookie'
import {
  ANIMAL,
  LESSON,
  USER,
  PSYLESSON,
  CLOSE_SIDEBAR,
  TOGGLE_DEVICE,
  SET_LANGUAGE ,
  TOGGLE_SIDEBAR
} from './types'

import {setStore} from '../common/utils/storageUtil'
//关于token的存放位置
//1.只用vuex存储：刷新页面vuex重新初始化，token消失导致需要重新登录
//2.window.sessionStorage: 初始化的时候用sessionStorage来赋值，刷新页面重新初始化，但因为sessionStorage里面存有token有值，
//那么state.token就有值了,vue-router就不会拦截，则无需重新登录。（这个demo用的是这种）
//3.window.localStorage: 初始化的时候用localStorage来赋值，这种情况跟sessionStorage差不多。后台配合给长时间有效的token比较好,
//如果token的有效期比较短，直接有sessionStorage比较好。

export default {
    [types.LOGIN]: (state, data) => {
        //更改token的值
        state.token = data;
        window.sessionStorage.setItem('token', data);
    },
    [types.LOGOUT]: (state) => {
        //登出的时候要清除token
        state.token = null;
        window.sessionStorage.removeItem('token');
    },
    //这步可有可无，根据自己需求去写
    [types.USERNAME]: (state, data) => {
        //把用户名存起来
        state.username = data;
        window.sessionStorage.setItem('username', data);
    },

    [ANIMAL] (state, {animals}) {
      state.animals = animals
    },
    [LESSON] (state, {lessons}) {
      state.lessons = lessons
    },
    [PSYLESSON] (state, {psylessons}) {
      state.psylessons = psylessons
    },

    [USER] (state, {user}) {
      state.user = user
      // setStore('user', {user});
    },


  [TOGGLE_SIDEBAR]: state => {
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
  },
  // 中英文
  [SET_LANGUAGE]: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  },
  [CLOSE_SIDEBAR]: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 1)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  [TOGGLE_DEVICE]: (state, device) => {
    state.device = device
  }

};
