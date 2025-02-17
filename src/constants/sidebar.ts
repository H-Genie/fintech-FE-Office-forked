import * as LucideIcons from 'lucide-react';

export const sideBarItems: {
  name: string;
  icon: keyof typeof LucideIcons;
  link: string;
}[] = [
  {
    name: '거래내역',
    icon: 'FileText',
    link: '/transactions',
  },
  {
    name: '키 관리',
    icon: 'KeyRound',
    link: '/api-keys',
  },
];
