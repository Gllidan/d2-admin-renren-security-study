/*
 * @Description: file content
 * @Author: huqi
 * @GitHub: https://github.com/hu-qi
 * @Email: me@huqi.me
 * @Date: 2019-04-29 16:58:49
 * @LastEditors: huqi
 * @LastEditTime: 2019-05-19 11:36:58
 */
import axios from 'axios'
import { Message } from 'element-ui'
import { cookieGet } from '@/common/cookie'
import { isPlainObject } from 'lodash'
import qs from 'qs'
import router from '@/router'

function errorLog (info) {
  // 显示提示
  Message({
    message: info,
    type: 'error',
    duration: 5 * 1000
  })
}

// 创建一个 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 1000 * 180, // 请求超时时间
  withCredentials: true // 当前请求为跨域类型时是否在请求中协带cookie
})

/**
 * 请求拦截
 */
service.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理
    config.headers['Accept-Language'] = cookieGet('language') || 'zh-CN'
    config.headers['token'] = cookieGet('token') || ''
    // 默认参数
    var defaults = {}
    // 防止缓存，GET请求默认带_t参数
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        ...{ '_t': new Date().getTime() }
      }
    }
    if (isPlainObject(config.data)) {
      config.data = {
        ...defaults,
        ...config.data
      }
      if (/^application\/x-www-form-urlencoded/.test(config.headers['content-type'])) {
        config.data = qs.stringify(config.data)
      }
    }
    return config
  },
  error => {
    // 发送失败
    console.log(error)
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 */
service.interceptors.response.use(
  response => {
    if (response.data.code === 401 || response.data.code === 10001) {
      // clearLoginInfo()
      // TODO: 清除用户信息
      router.replace({ name: 'login' })
      return Promise.reject(response.data.msg)
    } else if (response.data.code !== 0) {
      errorLog(response.data.msg)
      return Promise.reject(response.data.msg)
    } else {
      return response.data.data
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = '请求错误'; break
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break
        default: break
      }
    }
    errorLog(error.message)
    return Promise.reject(error)
  }
)

export default service
