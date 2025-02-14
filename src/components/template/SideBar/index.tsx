import { sideBarItems } from '@constants/sidebar.ts';
import SideBarItem from './SideBarItem.tsx';
import { useLocation } from 'react-router-dom';

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <aside className='w-60 h-screen bg-[#f1f1f1] p-12'>
      <figure className='flex flex-col items-center gap-2'>
        <img src='/logo.png' className='w-8' />
        <h4 className='font-bold text-xl truncate'>Admin</h4>
      </figure>

      <nav>
        <ul>
          {sideBarItems.map((item) => (
            <SideBarItem
              key={item.name}
              name={item.name}
              icon={item.icon}
              link={item.link}
              isActive={pathname === item.link}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
