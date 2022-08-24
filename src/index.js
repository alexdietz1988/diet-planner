import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from "./reducers"
import App from './App'
import './../node_modules/bulma/css/bulma.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={createStore(reducers)}>
    <Router>
        <App />
    </Router>
  </Provider>
)