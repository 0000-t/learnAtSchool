import {
  request
} from './request.js'

//根据页码获取用户信息
export function getUserByPageAndSize(page, size = 10) {
  return request({
    url: `/user/search/${page}/${size}`,
    method: 'post',
    data: {
      searchMap: {}
    }
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
    url: `/user/${data.id}`,
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