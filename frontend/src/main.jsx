import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./main.scss"
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='body'>
    <Provider store={store}>
      <PersistGate loading={"Loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </div>,
)
