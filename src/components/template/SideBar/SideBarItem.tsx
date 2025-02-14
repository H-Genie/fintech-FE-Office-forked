import * as LucideIcons from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { SideBarItemProps } from '@type/sidebar';

const SideBarItem = ({ icon, name, link, isActive }: SideBarItemProps) => {
  const navigate = useNavigate();
  const IconComponent = LucideIcons[icon] as LucideIcons.LucideIcon;

  return (
    <li
      className={`w-full h-12 flex items-center gap-2 rounded-[8px] mt-4 px-4 cursor-pointer ${
        isActive ? 'bg-[#CEE4F8]' : 'hover:text-[#007AFF]'
      }`}
      onClick={() => navigate(link)}
    >
      <IconComponent />
      <p>{name}</p>
    </li>
  );
};

export default SideBarItem;
