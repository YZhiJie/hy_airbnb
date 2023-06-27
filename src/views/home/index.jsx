// rmc
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomedataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from '@/utils'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  /** 从 redux 中获取数据 */
  // 在解构赋值时, 设置默认值为 {}, 可以避免使用 ? 判断是否为空
  const { 
    goodPriceInfo, 
    highScoreInfo, 
    discountInfo, 
    recommendInfo, 
    longforInfo,
    plusInfo
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  )

  /** 派发异步的事件: 发送网络请求 */
  // 每次获取的 dispatch 都是一样的, 所以相当参数二传入空数组的作用
  // 参数二传入空数组, 表示没有任何依赖项 => 回调函数中的代码只会在第一次渲染时执行一次
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomedataAction('xxx'))
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/* 折扣数据 */}
        {/* 可选链运算符 ? 用于变量, ?. 用于 [] 计算属性(字符串) */}
        {/* <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionTabs tabNames={tabNames}  tabClick={tabClickHandle}/>
          <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth='33.33333%'/>
        </div> */}

        {/* 当传入数据不为空时, 才开始渲染组件 */}
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}

        {isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo}/>}

        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>

      <div></div>
    </HomeWrapper>
  )
})

export default Home
