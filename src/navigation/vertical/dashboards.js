import { Home, Circle, Users } from 'react-feather'
import { FormattedMessage } from 'react-intl'

export default [
  {
    id: 'eCommerceDash',
    title: 'My Cabinet',
    icon: <Home size={20} />,
    navLink: '/dashboard/ecommerce'
  },
  {
    id: 'analyticsDash',
    title: 'Referral System',
    icon: <Users size={20} />,
    navLink: '/dashboard/analytics'
  }
  // {
  //   id: 'dashboards',
  //   title: 'Dashboards',
  //   icon: <Home size={20} />,
  //   badge: 'light-warning',
  //   badgeText: '2',
  //   children: [
  //   ]
  // }
]
