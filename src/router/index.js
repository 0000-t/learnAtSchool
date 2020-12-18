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
const Login = () => import('views/login/Login')

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/chart'
}, {
  path: '/chart',
  name: '统计分析',
  component: Chart,
  meta: {
    icon: "el-icon-date"
  }
}, {
  path: '/category',
  name: '分类管理',
  component: Category,
  meta: {
    icon: "el-icon-menu"
  }
}, {
  path: '/catalogue',
  name: '目录管理',
  component: Catalogue,
  meta: {
    icon: "el-icon-date"
  }
}, {
  path: '/course',
  name: '课程管理',
  component: Course,
  meta: {
    icon: "el-icon-tickets"
  }
}, {
  path: '/friend',
  name: '好友组管理',
  component: Friend,
  meta: {
    icon: "el-icon-date"
  }
}, {
  path: '/group',
  name: '小组排名',
  component: Group,
  meta: {
    icon: "el-icon-date"
  }
}, {
  path: '/integral',
  name: '积分管理',
  component: Integral,
  meta: {
    icon: "el-icon-date"
  }
}, {
  path: '/topic',
  name: '题目管理',
  component: Topic,
  meta: {
    icon: "el-icon-tickets"
  }
}, {
  path: '/test',
  name: '考核管理',
  component: Test,
  meta: {
    icon: "el-icon-date"
  }
}]
// }, {
//   path: '/subject',
//   name: '课题管理',
//   component: Subject
// }, {
//   path: '/user',
//   name: '用户管理',
//   component: User
// }, {
//   path: '/study',
//   name: '学习管理',
//   component: Study
// }, {
//   path: '/login',
//   name: '登录',
//   component: Login
// }]

const router = new VueRouter({
  routes,
  mode: 'history'
})

let t = [{
    path: "/subject",
    name: "课题管理",
    component: Subject,
    meta: {
      icon: "el-icon-date"
    }
  },
  {
    path: "/user",
    name: "用户管理",
    component: User,
    meta: {
      icon: "el-icon-date"
    }
  },
  {
    path: "/study",
    name: "学习管理",
    component: Study,
    meta: {
      icon: "el-icon-date"
    }
  },
  {
    path: "/login",
    name: "登录",
    component: Login,
  },
];

//生成路由表
//权限控制
router.beforeEach((to, from, next) => {
  console.log(to, from)
  router.addRoutes(t)
  router.options.routes.push(...t)
  next()
})

export default router