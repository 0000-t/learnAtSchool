/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-08 17:06:31
 * @LastEditors: tao
 * @LastEditTime: 2021-02-08 18:36:01
 */

const Chart = () => import('views/chart/Chart')
const Category = () => import('views/category/Category')
const Course = () => import('views/course/Course')
const Authority = () => import('views/authority/Authority')
const Group = () => import('views/group/Group')
const Test = () => import('views/test/Test')
const Integral = () => import('views/integral/Integral')
const User = () => import('views/user/User')
const Catalogue = () => import('views/catalogue/Catalogue')
const Subject = () => import('views/subject/Subject')
const Role = () => import('views/role/Role')
const Study = () => import('views/study/Study')
const Login = () => import('views/login/Login')
const Price = () => import('views/price/Price')
const Teacher = () => import('views/teacher/Teacher')
const Student = () => import('views/student/Student')

export const routes = [{
  path: '',
  redirect: '/chart'
}, {
  path: '/chart',
  name: '统计分析',
  component: Chart,
  meta: {
    icon: "el-icon-date",
    id: 'chart'
  }
}, {
  path: '/category',
  name: '分类管理',
  component: Category,
  meta: {
    icon: "el-icon-menu",
    id: 'category'
  }
}, {
  path: '/course',
  name: '课程管理',
  component: Course,
  meta: {
    icon: "el-icon-tickets",
    id: 'course'
  }
}, {
  path: '/authority',
  name: '权限管理',
  component: Authority,
  meta: {
    icon: "el-icon-date",
    id: 'authority'
  }
}, {
  path: '/group',
  name: '小组排名',
  component: Group,
  meta: {
    icon: "el-icon-date",
    id: 'group'
  }
}, {
  path: '/test',
  name: '考核管理',
  component: Test,
  meta: {
    icon: "el-icon-date",
    id: 'test'
  }
}, {
  path: "/subject",
  name: "课题管理",
  component: Subject,
  meta: {
    icon: "el-icon-date",
    id: 'subject'
  }
}, {
  path: "/role",
  name: "角色管理",
  component: Role,
  meta: {
    icon: "el-icon-date",
    id: 'role'
  }
}, {
  path: "/integral",
  name: "积分管理",
  component: Integral,
  meta: {
    icon: "el-icon-date",
    id: 'integral'
  }
}, {
  path: "/user",
  name: "用户管理",
  component: User,
  meta: {
    icon: "el-icon-date",
    id: 'user'
  }
}, {
  path: "/login",
  name: "登录",
  component: Login,
}, {
  path: "/price",
  name: "奖品信息",
  component: Price,
}, {
  path: "/teahcer",
  name: "课程分析",
  component: Teacher,
}, {
  path: "/student",
  name: "课程分析",
  component: Student,
}]