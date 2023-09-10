import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Editor',
    url: '/editor',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Empty',
    url: '/empty',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  }
];
