import { useRecommendations } from './logic'
import { RecommendationsStyle } from './styles'
import type { IRecommendationsProps } from './types'

import DropArrow from 'components/atoms/DropArrow'
import UserCard from 'components/atoms/UserCard'

import avatar from '@public/avatar2.jpg'

const fakeRecommendations = [
  {
    avatar: avatar,
    name: 'Vidan Tattoo',
    id: '1',
    smallBio: 'The best of the world'
  },
  {
    avatar: avatar,
    name: 'Vidan Tattoo',
    id: '2',
    smallBio: 'The best of the world'
  }
]

const Recommendations = ({ title, ...props }: IRecommendationsProps) => {
  const { theme, onArrowClick, show } = useRecommendations()

  return (
    <RecommendationsStyle {...props}>
      <header>
        <span>{title}</span>

        <DropArrow
          size={18}
          condition={show}
          onClick={onArrowClick}
          color={theme.colors.secondary}
        />
      </header>

      <ul>
        {show &&
          fakeRecommendations.map(({ avatar, id, name, smallBio }) => (
            <li key={id}>
              <UserCard name={name} smallBio={smallBio} avatar={avatar} />
            </li>
          ))}
      </ul>
    </RecommendationsStyle>
  )
}

export default Recommendations
