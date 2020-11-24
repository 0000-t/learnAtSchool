import Vue from 'vue'
import VueRouter from 'vue-router'

const Chart = () => import('views/chart/Chart')
const Category = () => import('views/category/Category')
const Course = () => import('views/course/Course')
const Friend = () => import('views/friend/Friend')
const Group = () => import('views/group/Group')
const Test = () => import('views/test/Test')
const Integral = () => import('views/integral/Integral')
const Topic = () => import('views/topic/Topic')

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/category'
}, {
  path: '/chart',
  name: '统计分析',
  component: Chart
}, {
  path: '/category',
  name: '分类管理',
  component: Category
}, {
  path: '/course',
  name: '课程管理',
  component: Course
}, {
  path: '/friend',
  name: '好友组管理',
  component: Friend
}, {
  path: '/group',
  name: '小组排名',
  component: Group
}, {
  path: '/integral',
  name: '积分管理',
  component: Integral
}, {
  path: '/topic',
  name: '题目管理',
  component: Topic
}, {
  path: '/test',
  name: '考核管理',
  component: Test
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router