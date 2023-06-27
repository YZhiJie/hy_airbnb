import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommnedData, getHomeLongforData, getHomePlusData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 参数二回调函数的参数:
// 参数1: 调用 fetchHomedataAction 时传入的参数
// 参数2: redux 中的 store 对象
export const fetchHomedataAction = createAsyncThunk('fetchdata', async (payload, { dispatch }) => {
  // const res = await getHomeGoodPriceData()
  // return res

  // 连续的 await 只能按照从上到下的顺序依次请求, 会阻塞后续代码的执行
  // 直接通过 then 获取结果, 不会阻塞后续代码的执行
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountInfoAction(res))
  })

  getHomeHotRecommnedData().then((res) => {
    dispatch(changeRecommendInfoAction(res))
  })

  getHomeLongforData().then((res) => {
    dispatch(changeLongforInfoAction(res))
  })

  getHomePlusData().then((res) => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  // 在 redux-devtools 中的名称
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomedataAction.fulfilled, (state, { payload }) => {
  //     // payload 获取的参数1 fetchHomedataAction 的返回值
  //     state.goodPriceInfo = payload
  //   })
  // },
})

export const { 
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer
