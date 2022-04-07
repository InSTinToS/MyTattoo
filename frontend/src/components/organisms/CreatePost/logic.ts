import { useTheme } from 'styled-components'

const useCreatePost = () => {
  const theme = useTheme()

  return { theme }
}

export { useCreatePost }
