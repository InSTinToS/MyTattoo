import { useState } from 'react'

const usePostFooter = () => {
  const [commenting, setIsCommenting] = useState(false)

  const onBalloonClick = () => {
    setIsCommenting(prev => !prev)
  }

  return { commenting, onBalloonClick }
}

export { usePostFooter }
