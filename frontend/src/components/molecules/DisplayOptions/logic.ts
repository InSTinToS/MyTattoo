import type { TSelectedDisplay } from './types'

import { useState } from 'react'
import { useTheme } from 'styled-components'

const useDisplayOptions = () => {
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

export { useDisplayOptions }
