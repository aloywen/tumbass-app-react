import React from 'react'
import ReactDOM from 'react-dom/client'
// import { } from 'react'
import App from './App'
import './index.css'

import { DataCart } from './config'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataCart>
        <App />
      </DataCart>
    </BrowserRouter>
  </React.StrictMode>,
)
