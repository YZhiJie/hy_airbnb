import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './modules/main'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      //关闭序列化状态检测中间件
      serializableCheck: false,
    }),

  // 是否在浏览器中启用 redux-devtools 工具
  // 默认值为 true
  // devTools: true
})

export default store
