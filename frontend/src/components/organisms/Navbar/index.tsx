import { Container } from './styles'
import React from 'react'

import DisplayOptions from 'components/molecules/DisplayOptions'
import ProfileOptions from 'components/molecules/ProfileOptions'
import Search from 'components/molecules/Search'

const Navbar = () => (
  <Container>
    <ul>
      <li>
        <DisplayOptions />
      </li>

      <li>
        <Search />
      </li>

      <li>
        <ProfileOptions />
      </li>
    </ul>
  </Container>
)

export default Navbar
