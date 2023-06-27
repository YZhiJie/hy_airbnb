import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from '@/App'
// 重置样式
// npm install normalize.css
import 'normalize.css'
import './assets/css/index.less'

import './assets/css/index.less'
import store from './store'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  // {/* 当项目中包含异步加载的组件时, 需要使用 Suspense 组件包裹根组件 App */}
  // {/* 通过 Provider 将 store 共享, 然后就可以使用 react-redux 库的 API 方法操作 store */}
  <Provider store={store}>
    {/* <Suspense fallback='loading'> */}
      {/* 通过 ThemeProvider 将 theme 共享, 然后就可以在 styled-components 创建的组件中通过 {props => props.theme 获取到 theme} */}
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    {/* </Suspense> */}
  </Provider>
  // </React.StrictMode>
)
