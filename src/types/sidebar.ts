import * as LucideIcons from 'lucide-react';

export interface SideBarItemProps {
  icon: keyof typeof LucideIcons;
  name: string;
  link: string;
}
