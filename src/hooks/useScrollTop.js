import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function useScrollTop() {
  const location = useLocation()
  useEffect(() => {
    // 切换页面时, 窗口滚动到顶部
    window.scrollTo(0, 0)
  }, [location.pathname])
}