import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <nav>
      <li>
        <Link to='/login'>로그인</Link>
      </li>
      <li>
        <Link to='/transactions'>거래 내역</Link>
      </li>
      <li>
        <Link to='/api-keys'>키 관리</Link>
      </li>
    </nav>
  );
};

export default MainPage;
