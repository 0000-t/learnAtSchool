import {
  request
} from './request.js'

//根据页码获取分类信息
export function getTestByPathAndSize(page, size = 10) {
  return request({
    url: `/learnrecord/findAllPage/${page}/${size}`
  })
}

//根据id删除分类
export function deleteTestById(id) {
  return request({
    url: `/test/${id}`,
    method: 'delete',
  })
}

//评分
export function updateTestById(data) {
  let {
    courseId,
    userId,
    scope
  } = data
  return request({
    url: `/learnrecord/teacherScore?courseId=${courseId}&userId=${userId}&scope=${scope}`,
    method: 'put',
  })
}

//添加分类信息
export function appendTest(data) {
  return request({
    url: '/test',
    method: 'post',
    data
  })
}

//根据id查找分类
export function selectTestById(id) {
  return request({
    url: `/test/${id}`
  })
}

//获取全部分类
export function getAllTest() {
  return request({
    url: `/test`
  })
}