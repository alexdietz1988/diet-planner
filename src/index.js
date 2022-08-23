import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from "./reducers"
import App from './App'
import './../node_modules/bulma/css/bulma.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore(reducers, applyMiddleware(thunk))

root.render(
  <Router>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </Router>
)