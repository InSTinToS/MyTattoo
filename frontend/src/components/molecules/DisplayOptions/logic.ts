import { useState } from 'react'
import { useTheme } from 'styled-components'

type TSelectedDisplay = 'vertical' | 'horizontal'

const DisplayOptionsLogic = () => {
  const theme = useTheme()

  const [selectedDisplay, setSelectedDisplay] =
    useState<TSelectedDisplay>('vertical')

  const onLiClick = (newSelected: TSelectedDisplay) => {
    if (selectedDisplay !== newSelected) setSelectedDisplay(newSelected)
  }

  const verticalColor =
    selectedDisplay === 'vertical'
      ? theme.colors.primary
      : theme.colors.secondary

  const horizontalColor =
    selectedDisplay === 'horizontal'
      ? theme.colors.primary
      : theme.colors.secondary

  return { onLiClick, horizontalColor, verticalColor }
}

export { DisplayOptionsLogic }
