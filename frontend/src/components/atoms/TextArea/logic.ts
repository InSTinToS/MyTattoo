import type { ITextAreaProps } from './types'

import { useState } from 'react'
import { useTheme } from 'styled-components'

const useTextArea = ({ onMouseDown, onBlur }) => {
  const theme = useTheme()
  const outlineStyle = `1px solid ${theme.colors.primary}`
  const [outline, setOutline] = useState(outlineStyle)

  const onTextAreaDown: ITextAreaProps['onClick'] = event => {
    setOutline('none')

    onMouseDown && onMouseDown(event)
  }

  const onTextAreaBlur: ITextAreaProps['onBlur'] = event => {
    setOutline(outlineStyle)

    onBlur && onBlur(event)
  }

  return { outline, onTextAreaBlur, onTextAreaDown }
}

export { useTextArea }
