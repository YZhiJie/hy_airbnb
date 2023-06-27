// rmcp
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  // 组件内容渲染完成
  useEffect(() => {
    // 获取 selectIndex 对应的 item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    // 2.content 元素的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    // 3.获取 contentRef 元素要滚动的距离
    // 课程老师补充: 计算机算乘法比算除法要快
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    // 4.特殊情况的处理
    // 左边的特殊情况处理
    if (distance < 0) distance = 0

    // 右边的特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance

    // 5.改变位置即可
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number,
}

export default Indicator
