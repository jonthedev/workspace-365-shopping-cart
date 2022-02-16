import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
import Cart from '../Cart/Cart'
import ModalButtons from './ModalButtons'

export default function Modal() {
  return ReactDOM.createPortal(
    <>
      <div className='modal-background'>
        <div
          className='modal-body'
          onClick={e => e.stopPropagation()}>
          <Cart />
          <ModalButtons />
        </div>
      </div>
    </>,
    document.getElementById('modal')
  )
}
