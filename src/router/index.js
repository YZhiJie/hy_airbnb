import Demo from "@/views/demo"
import React from "react"
import { Navigate } from "react-router-dom"

// 路由懒加载: 使用 import 动态导入组件, 然后在打包项目时, 会自动进行分包操作
// 注意: 当项目中包含异步加载的组件时, 需要使用 Suspense 组件包裹根组件 App

// 懒加载的组件会被渲染两次
// 1.Suspense 组件在其包裹的异步组件还未加载完成之前, 会先渲染 fallback 属性中的内容
// 2.在包裹的异步组件被加载完成之后, 会重新渲染一次异步组件

const Home = React.lazy(() => import('@/views/home'))
// import Home from '@/views/home'
const Entire = React.lazy(() => import('@/views/entire'))
const Detail = React.lazy(() => import('@/views/detail'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home'/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/entire',
    element: <Entire/>
  },
  {
    path: '/detail',
    element: <Detail/>
  },
  {
    path: '/demo',
    element: <Demo/>
  },
]

export default routes