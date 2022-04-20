import { UserCardStyle } from './styles'
import type { IUserCardProps } from './types'

import Avatar from 'components/atoms/Avatar'

const UserCard = ({ avatar, name, smallBio, ...props }: IUserCardProps) => (
  <UserCardStyle {...props}>
    <Avatar size={46} src={avatar} />

    <span className='name'>{name}</span>

    <span className='smallBio'>{smallBio}</span>
  </UserCardStyle>
)

export default UserCard
