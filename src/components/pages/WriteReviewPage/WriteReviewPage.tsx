import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

import { MOCK_FILM_REVIEWS } from '../../../mock-film-reviews.ts';
import { Header } from '../../Header/Header.tsx';
import { MainContent } from '../../MainContent.ts';
import { Footer } from '../../Footer/Footer.tsx';
import { PageTitle } from '../../PageTitle.ts';
import {
  AutocompleteInput,
  type AutocompleteInputOption,
} from '../../AutocompleteInput/AutocompleteInput.tsx';

import * as Styled from './WriteReviewPage.styles.ts';

const FILM_INPUT_ID = 'film';
const REVIEW_INPUT_ID = 'review';

export const WriteReviewPage = () => {
  const navigate = useNavigate();

  const [, setSelectedFilm] = useState<AutocompleteInputOption | null>(null);

  const filmAutocompleteOptions: AutocompleteInputOption[] = useMemo(
    () =>
      MOCK_FILM_REVIEWS.map((mockFilmReview) => ({
        label: mockFilmReview.title,
        value: mockFilmReview.id,
      })),
    [],
  );

  const handleFilmAutocompleteOnChange = (
    selectedOption: AutocompleteInputOption | null,
  ) => setSelectedFilm(selectedOption);

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
        <PageTitle>Write Film Review</PageTitle>

        <Styled.Form>
          <Styled.FieldWrapper>
            <Styled.Label htmlFor={FILM_INPUT_ID}>Film</Styled.Label>

            <AutocompleteInput
              onChange={handleFilmAutocompleteOnChange}
              options={filmAutocompleteOptions}
              placeholder="Search by film title…"
            />
          </Styled.FieldWrapper>

          <Styled.FieldWrapper>
            <Styled.Label htmlFor={REVIEW_INPUT_ID}>Review</Styled.Label>

            <Styled.Textarea id={REVIEW_INPUT_ID} />
          </Styled.FieldWrapper>

          <Styled.SaveButton type="submit">Save Review</Styled.SaveButton>
        </Styled.Form>
      </MainContent>

      <Footer />
    </>
  );
};
