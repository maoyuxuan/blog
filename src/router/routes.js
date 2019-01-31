const routes = [{
  path: '/',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
      path: '/',
      component: () => import('pages/home/Index.vue'),
      meta: {
        title: '最新动态'
      }
    },
    {
      path: 'describe',
      component: () => import('pages/home/Describe.vue'),
      meta: {
        title: '个人介绍'
      }
    },
    {
      path: 'test',
      component: () => import('pages/home/Test.vue'),
      meta: {
        title: '测试'
      }
    }
  ]
}]

routes.push({
  path: '/public',
  component: () => import('layouts/Public.vue'),
  children: [{
      path: 'setting',
      component: () => import('pages/setting/Setting.vue'),
      meta: {
        title: '设置'
      }
    },
    {
      path: 'build',
      component: () => import('pages/Build.vue'),
      meta: {
        title: '正在建设中'
      }
    }
  ]
})

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
