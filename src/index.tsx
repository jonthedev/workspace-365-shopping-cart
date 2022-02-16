import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.css'
import { StocksProvider } from './context/stocks_context'
import { ModalProvider } from './context/modal_context'
import { CartProvider } from './context/cart_context.js '
import { UserProvider } from './context/user_context'
import { ToastProvider } from './context/toast_context'

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <UserProvider>
        <StocksProvider>
          <CartProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </CartProvider>
        </StocksProvider>
      </UserProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('app-host')
)
