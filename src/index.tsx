import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import App from './App'

import store from './store'

import 'antd/dist/antd.css'
import './index.sass'

axios.defaults.baseURL = 'https://swapi.dev'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)