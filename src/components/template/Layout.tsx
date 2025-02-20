import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <main className='flex'>
      <SideBar />
      <article className='flex-1 flex flex-col items-center justify-center'>
        <Outlet />
      </article>
    </main>
  );
};

export default Layout;
