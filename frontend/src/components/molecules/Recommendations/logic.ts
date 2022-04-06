import { useState } from 'react'
import { useTheme } from 'styled-components'

const useRecommendations = () => {
  const theme = useTheme()

  const [show, setShow] = useState(true)

  const onArrowClick = () => {
    setShow(prev => !prev)
  }

  return { theme, show, onArrowClick }
}

export { useRecommendations }
