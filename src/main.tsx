import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"

//組件的樣式
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import Router from './router'

//狀態管理
// import { Provider } from "react-redux"
// import store from '@/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <Provider store={store} >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider>

)