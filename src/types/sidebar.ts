import * as LucideIcons from 'lucide-react';

export type SideBarItemProps = {
  icon: keyof typeof LucideIcons;
  name: string;
  link: string;
};
