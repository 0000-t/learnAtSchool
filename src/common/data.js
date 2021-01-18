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
  integral: 3, //积分
}