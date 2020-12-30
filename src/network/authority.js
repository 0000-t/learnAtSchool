import {
  request
} from './request.js'

//根据页码获取权限信息
export function getAuthorityByPathAndSize(page, size = 10) {
  return request({
    url: `/authority/search/${page}/${size}`
  })
}

//根据id删除权限
export function deleteAuthorityById(id) {
  return request({
    url: `/authority/${id}`,
    method: 'delete',
  })
}

//根据id修改权限
export function updateAuthorityById(data) {
  return request({
    url: '/authority',
    method: 'put',
    data
  })
}

//添加权限信息
export function appendAuthority(data) {
  console.log(data)
  return request({
    url: '/authority',
    method: 'post',
    data
  })
}

//根据id查找权限
export function selectAuthorityById(id) {
  return request({
    url: `/authority/${id}`
  })
}

//获取全部权限
export function getAllAuthority() {
  return request({
    url: `/authority`
  })
}