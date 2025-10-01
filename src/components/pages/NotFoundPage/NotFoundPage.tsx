import { MainContent } from '../../MainContent.ts';
import { Header } from '../../Header/Header.tsx';
import { Footer } from '../../Footer/Footer.tsx';
import { PageTitle } from '../../PageTitle/PageTitle.tsx';

import * as Styled from './NotFoundPage.styles.tsx';

export const NotFoundPage = () => (
  <>
    <Header isBackwardNavigationEnabled={true} />
    <MainContent>
      <PageTitle title="Page Not Found" />

      <Styled.NotFound>Sorry, we could find that page.</Styled.NotFound>
    </MainContent>
    <Footer />
  </>
);
