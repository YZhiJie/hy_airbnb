// rmcp
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props
  
  return (
    <RoomsWrapper>
      {
        // 首次渲染时, goodPriceInfo 的值为默认值 {}, 所以这里需要使用 可选链操作符 ?
        // 只展示 8 条数据
        roomList.slice(1, 9).map((item) => {
          return <RoomItem itemData={item} itemWidth={itemWidth}  key={item.id}/>
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms
