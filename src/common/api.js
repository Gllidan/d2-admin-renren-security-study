/*
 * @Description: file content
 * @Author: huqi
 * @GitHub: https://github.com/hu-qi
 * @Email: me@huqi.me
 * @Date: 2019-05-07 15:21:21
 * @LastEditors: huqi
 * @LastEditTime: 2019-05-19 11:26:49
 */
import request from '@/plugin/axios'

/**
 * @description [ sys ] 登陆注销相关
 */
export const sysAccountService = {
  login (data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  }
}

/**
 * @description [ sys ] 系统信息
 */
export const sysInfoService = {
  get () {
    return request({
      url: '/sys/info'
    })
  }
}

/**
 * @description [ sys ] 菜单和路由相关
 */
export const sysMenuService = {
  getNav () {
    return request({
      url: '/sys/menu/nav'
    })
  },
  /**
   * 获取权限
   */
  getPermissions () {
    return request({
      url: '/sys/menu/permissions'
    })
  }
}

/**
 * @description [ sys ] 用户相关
 */
export const sysUserService = {
  /**
   * 获取用户信息
   */
  getInfo () {
    return request({
      url: '/sys/user/info'
    })
  },
  updatePassword (data) {
    return request({
      url: '/sys/user/password',
      method: 'put',
      data
    })
  }
}
