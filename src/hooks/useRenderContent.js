import React from 'react'
import { Stock } from '../Features/Stock'
import HomePage from '../pages/HomePage'

export const useRenderContent = view => {
  switch (view) {
    case 'stock':
      return <Stock />
    default:
      return <HomePage />
  }
}
