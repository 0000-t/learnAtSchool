import {
  request
} from './request.js'

//根据页码获取小组排名信息
export function getGroupByPathAndSize() {
  return request({
    url: `/learnrecord/rankCourse`
  })
}

//根据id删除小组排名
export function deleteGroupById(id) {
  return request({
    url: `/group/${id}`,
    method: 'delete',
  })
}

//根据id修改小组排名
export function updateGroupById(data) {
  return request({
    url: '/group',
    method: 'put',
    data
  })
}

//添加小组排名信息
export function appendGroup(data) {
  return request({
    url: '/group',
    method: 'post',
    data
  })
}

//根据id查找小组排名
export function selectGroupById(id) {
  return request({
    url: `/group/${id}`
  })
}

//获取全部小组排名
export function getAllGroup() {
  return request({
    url: `/group`
  })
}