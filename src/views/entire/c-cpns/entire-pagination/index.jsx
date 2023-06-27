// rmc
import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { Pagination } from '@mui/material'

const EntirePagination = memo(() => {
  const { totalCount = 0, currentPage } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
    }),
    shallowEqual
  )

  // 小算法: 必须掌握
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  /** 事件处理的逻辑 */
  const dispatch = useDispatch()
  /**
   * 分页器页码改变时的回调函数
   * @param {*} event 事件对象
   * @param {*} pageCount 当前选中的页码
   */
  function pageChangeHandle(event, pageCount) {
    // 换页的时候, 回到页面顶部
    window.scrollTo(0, 0)

    // 更新最新的页码: redux => currentPage
    // dispatch(changeCurrentPageAction(pageCount - 1))
    // 传入 pageCount - 1 的原因: pageCount 主要用于设置数据偏移量/startCount/endCount, 当页码 pageCount 为 n 时, 对应的数据偏移量为 (n - 1) * pageSize
    // 设置 pageCount 从 0 开始计数, 便于 数据偏移量/startCount/endCount 这三者的计算
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      <div className="pagination">
        <Pagination count={totalPage} onChange={pageChangeHandle} />
      </div>
      <div className="info">
        第{startCount}-{endCount}个房源, 共超过{totalCount}个
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination
