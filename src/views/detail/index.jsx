// rmc
import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-infos'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  // 只在组件被初次渲染完成后执行一次
  const dispacth = useDispatch()
  useEffect(() => {
    dispacth(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispacth])

  return (
    <DetailWrapper>
      <DetailPictures/>
      <DetailInfos/>
    </DetailWrapper>
  )
})

export default Detail