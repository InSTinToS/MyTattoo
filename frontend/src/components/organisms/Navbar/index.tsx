import { NavbarStyle } from './styles'

import DisplayOptions from 'components/molecules/DisplayOptions'
import ProfileOptions from 'components/molecules/ProfileOptions'
import Search from 'components/molecules/Search'

const Navbar = () => (
  <NavbarStyle>
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
  </NavbarStyle>
)

export default Navbar
