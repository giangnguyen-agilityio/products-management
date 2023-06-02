import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'
import BookProvider from './store/BookProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>
)
