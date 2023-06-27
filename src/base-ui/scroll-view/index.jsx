// rmcp
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  // useRef 可以通过 ref 属性获取一个类组件实例对象, 也可以赋值为一个值, 该值在组件的生命周期中永远不会发生改变(可以不触发组件重新渲染)
  // 因为 ref 对象保存的是一个对象的引用地址, 其值是通过 current 属性获取的, 对象的引用地址在对象的生命周期中不会发生改变
  const totalDistanceRef = useRef()

  /** 组件渲染完毕, 判断是否显示右侧的按钮 */
  const scrollContentRef= useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 元素的可滚动宽度(包含不可见的滚动区域)
    const clientWidth = scrollContentRef.current.clientWidth // 可见宽度(不包含滚动区域)
    const totalDistance = scrollWidth - clientWidth // 不可见的滚动部分的宽度
    // 只需要在组件第一次渲染的时候获取一次
    totalDistanceRef.current = totalDistance
    // 当内容超出时, 显示右侧按钮
    setShowRight(totalDistance > 0)
  }, [props.children])

  /** 事件处理的逻辑 */
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetLeft
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)

    // 是否继续显示右边的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    // 是否继续显示左侧按钮
    setShowLeft(newOffsetLeft > 0)
  }
  
  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight/>
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView