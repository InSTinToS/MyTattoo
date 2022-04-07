import { FeedContext } from 'components/templates/Feed/logic'

import { useContext } from 'react'
import { useTheme } from 'styled-components'

const useAuthModal = () => {
  const theme = useTheme()
  const { toggleShowAuthModal, showAuthModal } = useContext(FeedContext)

  return { theme, toggleShowAuthModal, page: showAuthModal.page }
}

export { useAuthModal }
