// router.js 定义路由规则
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(), // hash 模式
    routes: [
        {
            path: '/homeIndex',
            name: 'homeIndex',
            component: () => import('@/pages/HomeIndex.vue')
        },
    ],
})

// 导出路由
export default router

/*
* import语法需要Babel添加syntax-dynamic-import插件。最新当vue-cli 3.0中默认添加该特性，不需要额外引用。另外，合理控制异步模块的数量。
* https://lq782655835.github.io/blogs/team-standard/recommend-vuerouter.html
* */
