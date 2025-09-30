import { useNavigate } from 'react-router';

import { MainContent } from '../../MainContent.ts';
import { Header } from '../../Header/Header.tsx';
import { Footer } from '../../Footer/Footer.tsx';
import { PageTitle } from '../../PageTitle.ts';

import * as Styled from './NotFoundPage.styles.tsx';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        icons={{
          leading: {
            icon: 'leftArrow',
            label: 'Back to Film Log',
            onClick: () => navigate('/'),
          },
        }}
      />
      <MainContent>
        <PageTitle>Page Not Found</PageTitle>

        <Styled.NotFound>Sorry, we could find that page.</Styled.NotFound>
      </MainContent>
      <Footer />
    </>
  );
};
