import {
  request
} from './request.js'

//根据页码获取分类信息
export function getCategoryByPathAndSize(page, size = 10) {
  return request({
    url: `/category/all/${page}/${size}`
  })
}

//根据id删除分类
export function deleteCategoryById(id) {
  return request({
    url: `/category/${id}`,
    method: 'delete',
  })
}

//根据id修改分类
export function updateCategoryById(data) {
  return request({
    url: '/category',
    method: 'put',
    data
  })
}

//添加分类信息
export function appendCategory(data) {
  return request({
    url: '/category',
    method: 'post',
    data
  })
}

//根据id查找分类
export function selectCategoryById(id) {
  return request({
    url: `/category/${id}`
  })
}

//获取全部分类
export function getAllCategory() {
  return request({
    url: `/category`
  })
}