import SideBarItem from './SideBarItem.tsx';
import * as LucideIcons from 'lucide-react';

const sideBarItems: {
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

const SideBar = () => {
  return (
    <aside className='w-60 h-screen bg-[#f1f1f1] p-12'>
      <div className='flex flex-col items-center gap-2'>
        <img src='/logo.png' className='w-8' />
        <h4 className='font-bold text-xl truncate'>Admin</h4>
      </div>

      <nav>
        <ul>
          {sideBarItems.map((item) => (
            <SideBarItem
              key={item.name}
              name={item.name}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
