import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://47.94.135.125:6081',
    timeout: 5000
  });

  //1.发送请求前
  instance.interceptors.request.use(config => {
    //添加请求的动画

    return config
  }, err => {
    //停止动画，提示错误
  })

  //2.接收数据后
  instance.interceptors.response.use(res => {
    //停止动画
    return res.data
  }, err => {
    //停止动画，提示错误
  })

  //3.真正发送网络请求
  return instance(config)
}