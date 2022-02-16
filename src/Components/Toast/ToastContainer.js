import React from 'react'

import { useToastContext } from '../../context/toast_context'
import Toast from './Toast'

export default function ToastContainer() {
  const { toasts } = useToastContext()

  return (
    <div className='absolute top-10 w-full z-50'>
      <div className='max-w-xl mx-auto'>
        {toasts &&
          toasts.map(toast => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  )
}
