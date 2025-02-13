import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <main className='flex'>
      <SideBar />
      <article className='w-[calc(100%-240px)]'>
        <Outlet />
      </article>
    </main>
  );
};

export default Layout;
