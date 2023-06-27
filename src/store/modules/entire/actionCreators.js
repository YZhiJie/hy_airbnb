import * as actionTypes from './constants'
import { getEntireRoomList } from '@/services/modules/entire'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0) => {
  // 新的函数
  return async (dispatch, getState) => {
    // 0.修改currentPage
    dispatch(changeCurrentPageAction(page))
    
    // 1.根据页码获取最新的数据
    // const currentPage = getState().entire.currentPage
    // 正在发送网络请求加载数据
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    // 已经成功请求到数据
    dispatch(changeIsLoadingAction(false))

    // 2.获取到最新的数据, 保存到 redux 的 store 中
    const roomList = res.list
    // 这里使用 Number 的原因: 从服务器获取的 totalCount 字段类型可能为字符串类型. 所以需要进行一层转换
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}


