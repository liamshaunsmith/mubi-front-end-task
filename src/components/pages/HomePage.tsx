import { useNavigate } from 'react-router';

import { Header } from '../Header/Header.tsx';
import { Footer } from '../Footer/Footer.tsx';
import { MainContent } from '../MainContent.ts';
import { WRITE_REVIEW_URL } from '../../constants.ts';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        icons={{
          trailing: {
            icon: 'plus',
            label: 'Write film review',
            onClick: () => navigate(WRITE_REVIEW_URL),
          },
        }}
      />

      <MainContent>Home page placeholder.</MainContent>

      <Footer />
    </>
  );
};
