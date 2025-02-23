import { useNavigate } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <section className="not-found__content">
        <h1 className="not-found__title">Not Found</h1>
        <p className="not-found__desc">요청하신 페이지를 찾을 수 없습니다.</p>
      </section>
      <button type="button" className="not-found__button" onClick={() => navigate('/')}>
        메인으로 이동
      </button>
    </main>
  );
};

export default NotFound;
