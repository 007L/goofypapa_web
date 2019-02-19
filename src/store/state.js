import Cookies from 'js-cookie'

export default {
  animals:[],
  lessons:[],
  psylessons:[],
  user:{},
  token: window.sessionStorage.getItem('token'),
  username: '',
  // 中英文
  language: Cookies.get('language') || 'zh',
  sidebar: {
    opened: !+Cookies.get('sidebarStatus'),
    withoutAnimation: false
  },
  device: 'desktop'
}
