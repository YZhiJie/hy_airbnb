import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false, // 是否为固定定位
      topAlpha: false, // 是否设置透明度效果
    }
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer