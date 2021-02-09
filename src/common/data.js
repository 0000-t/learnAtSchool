/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2020-12-22 22:16:35
 * @LastEditors: tao
 * @LastEditTime: 2021-02-09 14:47:29
 */
export let routeSet = {
  chart: {
    id: 'chart',
    name: '统计分析',
    icon: "el-icon-date",
  },
  category: {
    name: '分类管理',
    icon: "el-icon-menu",
    id: 'category'
  },
  course: {
    name: '课程管理',
    icon: "el-icon-tickets",
    id: 'course'
  },
  authority: {
    name: '权限管理',
    icon: "el-icon-date",
    id: 'authority'
  },
  group: {
    name: '小组排名',
    icon: "el-icon-date",
    id: 'group'
  },
  test: {
    name: '考核管理',
    icon: "el-icon-date",
    id: 'test'
  },
  subject: {
    name: "课题管理",
    icon: "el-icon-date",
    id: 'subject'
  },
  role: {
    name: "角色管理",
    icon: "el-icon-date",
    id: 'role'
  },
  integral: {
    name: "积分管理",
    icon: "el-icon-date",
    id: "integral"
  },
  user: {
    name: "用户管理",
    icon: "el-icon-date",
    id: 'user'
  },
  price: {
    name: "奖品信息",
    icon: "el-icon-date",
    id: 'price'
  },
  teahcer: {
    name: "课程分析",
    icon: "el-icon-date",
    id: 'teahcer'
  },
  student: {
    name: "学习分析",
    icon: "el-icon-date",
    id: 'student'
  }
}

export let routeGroup = {
  role: 2, //角色
  authority: 2, //权限管理
  user: 2, //用户
  category: 1, //分类
  course: 1, //课程
  subject: 1, //课题
  test: 1, //考核
  group: 0, //小组
  chart: 0, //分析
  teahcer: 0,
  student: 0,
  integral: 3, //积分
  price: 4
}