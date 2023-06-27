// rmc
import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

/*
  @reduxjs/toolkit 库在底层是通过 .subscribe() 监听 redux 中的数据变化的,
  但是 .subscribe() 不会监听异步加载的 js 文件(页面)发出去的事件

  异步加载组件: 通过 React.lazy() 和 import() 导入的组件 => 详见路由映射配置文件

  解决方法: 在项目入口文件 index.js 中, 使用 react-redux 库的 Provider 组件包裹 react 的 Suspense 组件
  实现原理: 使用 Provider 组件包裹 Suspense 组件后, 那些异步加载的组件发出的事件(修改 state 数据)也会被 store.subscribe() 监听到
*/

const AppHeader = memo(() => {
  /** 定义组件内部的状态 */
  // 记录是否处于搜索状态
  const [isSearch, setIsSearch] = useState(false)

  /** 从 redux 中获取数据 */
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  )
  const { isFixed, topAlpha } = headerConfig

  /** 监听窗口的滚动 */
  const { scrollY } = useScrollPosition()
  // useRef 返回的值或指向的类组件实例在当前组件的整体生命周期中是不变的
  const prevY = useRef(0)
  // 在默认情况下(不显示搜索功能时), 实时记录窗口的滚动记录
  if (!isSearch) prevY.current = scrollY
  // 在弹出搜索功能时, 如果窗口滚动距离大于/小于之前记录的滚动距离 30px, 那么隐藏搜索功能, 显示默认的搜索框
  // Math.abs(value) 返回 value 的绝对值  => abs: absolute
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  // 注意: 不能直接在函数式组件的顶层作用域中直接使用 setXxx 方法, 因为调用 setXxx 方法之后, 组件会被重新渲染,
  // 然后就会导致当前组件被循环渲染 => 报错

  /** 透明度的逻辑 */
  // 窗口置顶, 同时设置了 topAlpha 为 true
  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={(e) => setIsSearch(true)} />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch}/>
        </div>
        {isSearch && <div className='cover' onClick={(e) => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
