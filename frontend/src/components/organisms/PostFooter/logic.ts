import { useState } from 'react'

const usePostFooter = () => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)

  const onBalloonClick = () => {
    setIsCommentsOpen(prev => !prev)
  }

  return { isCommentsOpen, onBalloonClick }
}

export { usePostFooter }
