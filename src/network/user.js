import {
  request
} from './request.js'

//根据页码获取用户信息
export function getUserByPathAndSize(page, size = 10) {
  return request({
    url: `/user/findAll/${page}/${size}`
  })
}

//根据id删除用户
export function deleteUserById(id) {
  return request({
    url: `/user/${id}`,
    method: 'delete',
  })
}

//根据id修改用户
export function updateUserById(data) {
  return request({
    url: '/user',
    method: 'put',
    data
  })
}

//添加用户信息
export function appendUser(data) {
  return request({
    url: '/user',
    method: 'post',
    data
  })
}

//根据id查找用户
export function selectUserById(id) {
  return request({
    url: `/user/${id}`
  })
}

//获取全部用户
export function getAllUser() {
  return request({
    url: `/user`
  })
}