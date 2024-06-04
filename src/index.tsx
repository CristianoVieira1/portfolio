import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CustomCursor from './components/Cursor'
import reportWebVitals from './reportWebVitals'
import './theme/main.css'
import './theme/plugins.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CustomCursor />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
