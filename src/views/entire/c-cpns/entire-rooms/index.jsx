// rmc
import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  /** 从 redux 中获取 roomList 数据 */
  const { roomList = [], totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  /** 事件处理 */
  // useCallback 包裹的函数在组件被重新渲染时, 不会被重新定义
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item) => {
    // 不是通过网络请求, 将本地数据保存到 store 中的缺点: 一旦刷新页面, 保存的数据就会被清空
    // 解决方法: 将数据保存到浏览器中
    dispatch(changeDetailInfoAction(item))
    localStorage.setItem('itemData', JSON.stringify(item))

    navigate('/detail')
  }, [navigate, dispatch])
  
  return (
    <RoomsWrapper>
      <h2 className='title'>共<span className='total-count'>{totalCount}</span>多处住所</h2>
      <div className="list">
        {
          roomList.map(item => {
            return (
              <RoomItem 
                itemData={item} 
                itemWidth='20%' 
                key={item._id}
                itemClick={itemClickHandle}
              />
            )
          })
        }
      </div>

      {isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms