import { IFeedContext } from './types'

import { createContext, useState } from 'react'

const FeedContext = createContext<IFeedContext>({
  showLeftSide: true,
  toggleShowLeftSide: null
})

const useFeed = () => {
  const [showLeftSide, setShowLeftSide] = useState(true)

  const toggleShowLeftSide = () => {
    setShowLeftSide(prev => !prev)
  }

  const contextValue = { showLeftSide, toggleShowLeftSide }

  return { showLeftSide, contextValue }
}

export { useFeed, FeedContext }
