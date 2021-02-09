/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-07 21:18:06
 * @LastEditors: tao
 * @LastEditTime: 2021-02-07 21:19:11
 */
import {
  request
} from './request.js'

//根据页码获取权限信息
export function getPriceByPathAndSize(page, size = 10) {
  return request({
    url: `/price/findAll/${page}/${size}`,
    method: 'post'
  })
}

//根据id删除权限
export function deletePriceById(id) {
  return request({
    url: `/price/${id}`,
    method: 'delete',
  })
}

//根据id修改权限
export function updatePriceById(data) {
  return request({
    url: '/price',
    method: 'put',
    data
  })
}

//添加权限信息
export function appendPrice(data) {
  console.log(data)
  return request({
    url: '/price',
    method: 'post',
    data
  })
}

//根据id查找权限
export function selectPriceById(id) {
  return request({
    url: `/price/${id}`
  })
}

//获取全部权限
export function getAllPrice() {
  return request({
    url: `/price`
  })
}