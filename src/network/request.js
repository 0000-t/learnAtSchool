import axios from 'axios'
import {
  Loading
} from 'element-ui';

//存储动画对象
let loadingInstance;
//过渡动画的默认配置
const option = {
  fullscreen: true,
  text: '加载中',
  background: 'rgba(0, 0, 0, 0.8)'
};

export function request(config, load = option) {
  const instance = axios.create({
    baseURL: 'http://47.94.135.125:6081/online-study',
    timeout: 5000
  });

  //1.发送请求前
  instance.interceptors.request.use(config => {
    //添加请求的动画
    loadingInstance = Loading.service(load);
    return config
  }, err => {
    //停止动画，提示错误
    console.log('发送请求前报错')
    loadingInstance.close();
  })

  //2.接收数据后
  instance.interceptors.response.use(res => {
    //停止动画
    loadingInstance.close();
    return res.data
  }, err => {
    //停止动画，提示错误
    console.log('接收数据报错')
    loadingInstance.close();
  })

  //3.真正发送网络请求
  return instance(config)
}