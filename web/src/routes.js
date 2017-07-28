import React from 'react'
//IndexRoute就是根路由默认显示的
import {Router, Route, IndexRoute} from 'react-router'
//从src/containers/index.js导入
import {App} from './redux/containers/'

//这里IndexRoute入在根app下后，就是在App页面组件的props.children
//匹配规则参考官方文档
// const routerConfig = [
//     {
//         path          : '/',
//         component     : Main,
//         childrenRoutes: [
//             {path: 'about', component: About},
//             {path: 'inbox', component: Inbox}
//         ]
//     },
//     {
//         path: '*',
//         component: Not
//     }
// ];

export const createRoutes = () => ({
    path: '/dist',
    component: App,
    
    childRoutes: [
        // {path:'/dist/dsd',component:WaitInspection},
        // {path:'/dist/ycd',component:ErrorOrder},
        // {path:'/dist/itemList',component:GoodsList},
        // {path:'/dist/WaitPay',component:WaitPayOrder},
    ]
})
export default createRoutes
