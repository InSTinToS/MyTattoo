import { useTheme } from 'styled-components'

const useProfileOptions = () => {
  const theme = useTheme()

  return { theme }
}

export { useProfileOptions }
