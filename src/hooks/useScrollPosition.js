import { useEffect, useState } from "react"
// npm install underscore
import { throttle } from 'underscore'

export default function useScrollPosition() {
  // 定义状态, 记录窗口滚动位置
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听 window 的滚动
  useEffect(() => {
    // 节流操作: 100ms 只会执行一次
    const handleScroll = throttle(function() { 
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    // 在组件渲染完成后, 添加事件监听
    window.addEventListener('scroll', handleScroll)

    // 在组件被卸载时, 移除事件监听
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 返回: 对象的解构赋值比较方便
  return { scrollX, scrollY }
}