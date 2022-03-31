import { useTheme } from 'styled-components'

const useHeartButton = () => {
  const theme = useTheme()

  return { likedColor: theme.colors.red, notLikedColor: theme.colors.secondary }
}

export { useHeartButton }
