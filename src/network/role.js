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
    url: `/role`,
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

//获取用户的权限
export function getUserRoleById(id) {
  return request({
    url: `/authority/getRoleAuthority?roleId=${id}`,
  })
}

//设置用户的权限
export function setRoleByUser(data) {
  let {
    rightIds,
    roleId
  } = data
  return request({
    url: `/authority/giveRight2Role?rightIds=${rightIds}&roleId=${roleId}`,
    method: 'post',
  })
}