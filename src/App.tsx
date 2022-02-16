import React, { ReactElement } from 'react'
import { Layout } from './Features/Layout'
import { GlobalNavBar } from './Features/GlobalNavBar'
import Modal from './Components/Modal/Modal'
import { useModalContext } from './context/modal_context'
import { useUserContext } from './context/user_context'
import { useRenderContent } from './hooks/useRenderContent'
import ToastContainer from './Components/Toast/ToastContainer'
import { useSetView } from './hooks/useSetView'

export const App = (): ReactElement => {
  const { isModalOpen, openModal } = useModalContext()
  const { user } = useUserContext()
  const { view, setView } = useSetView()

  const changeViewHandler = async (name: string): Promise<void> => {
    switch (name) {
      case 'buy':
        openModal()
        break
      default:
        setView(name)
        break
    }
  }

  return (
    <Layout>
      <Layout.Header>
        <GlobalNavBar user={user} onChangeView={changeViewHandler} />
        {user && <div className='gold-coin'>{user.balance} gold</div>}
      </Layout.Header>
      <Layout.Content>{useRenderContent(view)}</Layout.Content>
      <Layout.Footer />
      {isModalOpen && <Modal />}
      <ToastContainer />
    </Layout>
  )
}
App.displayName = 'App'
