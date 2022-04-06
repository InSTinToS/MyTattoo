import { useTheme } from 'styled-components'

const useLabel = () => {
  const theme = useTheme()

  return { theme }
}

export { useLabel }
