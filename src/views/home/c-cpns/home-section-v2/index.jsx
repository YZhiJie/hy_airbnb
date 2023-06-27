// rmcp
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  /** 从 props 中获取数据 */
  const { infoData } = props
  
  /** 定义内部的 state */
  // 注意: useState 的初始值设置只在组件第一次被渲染时, 才是有效的
  const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? ''
  // 由于组件第一次被渲染时, initialName 取值为 '', 所以取不到数据 
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map((item) => item.name)
  // useEffect(() => {
  //   setName('xxx')
  // }, [infoData])

  /** 事件处理函数 */
  // useCallback 返回的函数在组件被重新渲染, 并且依赖数据没有变化时, 不会被重新定义(内存地址变更)
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]}/>
      <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2