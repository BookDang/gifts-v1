import { PiUsersThree, PiGiftLight } from 'react-icons/pi'
import { RiHistoryLine } from 'react-icons/ri'

export const menuItems = [
  {
    name: 'Users',
    path: '/dashboard/users',
    icon: <PiUsersThree className="w-6 h-6" />,
  },
  {
    name: 'Gifts',
    path: '/dashboard/gifts',
    icon: <PiGiftLight className="w-6 h-6" />,
  },
  {
    name: 'Histories',
    path: '/dashboard/histories',
    icon: <RiHistoryLine className="w-6 h-6" />,
  },
]