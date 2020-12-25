import {
  request
} from './request.js'

//根据页码获取用户信息
export function getRoleByPageAndSize(page, size = 10) {
  return request({
    url: `/role/search/${page}/${size}`,
  })
}

//根据id删除用户
export function deleteRoleById(id) {
  return request({
    url: `/role/${id}`,
    method: 'delete',
  })
}

//根据id修改用户
export function updateRoleById(data) {
  return request({
    url: `/role/${data.id}`,
    method: 'put',
    data
  })
}

//添加用户信息
export function appendRole(data) {
  return request({
    url: '/role',
    method: 'post',
    data
  })
}

//根据id查找用户
export function selectRoleById(id) {
  return request({
    url: `/role/${id}`
  })
}

//获取全部用户
export function getAllRole() {
  return request({
    url: `/role`
  })
}