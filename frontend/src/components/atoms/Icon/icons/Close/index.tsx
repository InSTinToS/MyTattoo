import Icon from '../..'
import type { IIconProps } from '../../types'

import { composeClassName } from 'utils/composeClassName'

const Close = ({ className, ...props }: IIconProps) => (
  <Icon
    viewBox='0 0 13 12'
    className={composeClassName('Close', className)}
    {...props}
  >
    <path d='M0.363415 0.33546C0.596179 0.120665 0.911834 0 1.24096 0C1.57009 0 1.88575 0.120665 2.11851 0.33546L6.50749 4.38683L10.8965 0.33546C11.1306 0.126752 11.4441 0.0112672 11.7696 0.0138777C12.095 0.0164882 12.4063 0.136985 12.6365 0.349417C12.8666 0.561848 12.9971 0.849216 13 1.14963C13.0028 1.45004 12.8777 1.73946 12.6516 1.95555L8.26259 6.00692L12.6516 10.0583C12.8777 10.2744 13.0028 10.5638 13 10.8642C12.9971 11.1646 12.8666 11.452 12.6365 11.6644C12.4063 11.8768 12.095 11.9973 11.7696 12C11.4441 12.0026 11.1306 11.8871 10.8965 11.6784L6.50749 7.62701L2.11851 11.6784C1.88441 11.8871 1.57088 12.0026 1.24543 12C0.919984 11.9973 0.608668 11.8768 0.378535 11.6644C0.148401 11.452 0.0178623 11.1646 0.0150342 10.8642C0.0122062 10.5638 0.137315 10.2744 0.363415 10.0583L4.7524 6.00692L0.363415 1.95555C0.13072 1.74069 0 1.44932 0 1.1455C0 0.841693 0.13072 0.550319 0.363415 0.33546Z' />
  </Icon>
)

export default Close
