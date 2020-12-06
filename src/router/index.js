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
const Catalogue = () => import('views/catalogue/Catalogue')
const Subject = () => import('views/subject/Subject')
const User = () => import('views/user/User')
const Study = () => import('views/study/Study')

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
  path: '/catalogue',
  name: '目录管理',
  component: Catalogue
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
}, {
  path: '/subject',
  name: '课题管理',
  component: Subject
}, {
  path: '/user',
  name: '用户管理',
  component: User
}, {
  path: '/study',
  name: '学习管理',
  component: Study
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router