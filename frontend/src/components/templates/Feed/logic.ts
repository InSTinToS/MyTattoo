import type { IFeedContext, IShowAuthModalState } from './types'

import { createContext, useState } from 'react'
import { useTheme } from 'styled-components'

const FeedContext = createContext<IFeedContext>({
  showLeftSide: true,
  toggleShowLeftSide: null,
  toggleShowAuthModal: null,
  showAuthModal: { page: 'sign-in', open: false }
})

const useFeed = () => {
  const theme = useTheme()

  const [showLeftSide, setShowLeftSide] = useState(true)
  const [showAuthModal, setShowAuthModal] = useState<IShowAuthModalState>({
    open: false,
    page: 'sign-in'
  })

  const toggleShowLeftSide = () => {
    setShowLeftSide(prev => !prev)
  }

  const toggleShowAuthModal = (newState: IShowAuthModalState) => {
    setShowAuthModal(newState)
  }

  const contextValue = {
    showLeftSide,
    showAuthModal,
    toggleShowLeftSide,
    toggleShowAuthModal
  }

  return { showLeftSide, contextValue, theme, showAuthModal }
}

export { useFeed, FeedContext }
