// import ajax from './ajax'
import fetch from './fetch'

export const requestanimal = () => fetch('/animal')
console.log(requestanimal)
export const getUser = () => fetch('/user')

export const accountLogin = (username , password) => fetch('/user' ,{
  username,
  password
} , 'POST')

//获取图片验证码
export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST')
