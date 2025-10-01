import { type ChangeEvent, type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../../hooks.ts';
import { selectAutoCompleteFilmInputOptions } from '../../../store/selectors.ts';
import { Header } from '../../Header/Header.tsx';
import { MainContent } from '../../MainContent.ts';
import { Footer } from '../../Footer/Footer.tsx';
import { PageTitle } from '../../PageTitle/PageTitle.tsx';
import {
  AutoCompleteInput,
  type AutoCompleteInputOption,
} from '../../AutoCompleteInput/AutoCompleteInput.tsx';

import * as Styled from './WriteReviewPage.styles.ts';
import { addFilmReview } from '../../../store/film-reviews-slice.ts';
import { FILM_URL } from '../../../constants.ts';

const FILM_INPUT_ID = 'film';
const REVIEW_INPUT_ID = 'review';

export const WriteReviewPage = () => {
  const navigate = useNavigate();
  const [reviewTextAreaValue, setReviewTextAreaValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const [selectedFilm, setSelectedFilm] =
    useState<AutoCompleteInputOption | null>(null);

  const [formError, setFormError] = useState<string>('');

  const filmAutocompleteOptions = useAppSelector(
    selectAutoCompleteFilmInputOptions,
  );

  const handleFilmAutocompleteOnChange = (
    selectedOption: AutoCompleteInputOption | null,
  ) => setSelectedFilm(selectedOption);

  const handleReviewTextAreaOnChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => setReviewTextAreaValue(event.target.value);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormError('');

    const trimmedReviewTextAreaValue = reviewTextAreaValue.trim();

    if (!selectedFilm) {
      setFormError(
        `Oops! It looks like you forgot to select the film you're reviewing.`,
      );

      return;
    }

    if (!trimmedReviewTextAreaValue) {
      setFormError(
        `Oops! It looks like you forgot to enter your review for ${selectedFilm.label}.`,
      );

      return;
    }

    dispatch(
      addFilmReview({
        contents: trimmedReviewTextAreaValue,
        filmId: selectedFilm.value,
      }),
    );

    navigate(`${FILM_URL}/${selectedFilm.value}`);
  };

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
        <PageTitle title="Write Film Review" />

        <Styled.Form onSubmit={handleOnSubmit}>
          {formError}
          <Styled.FieldWrapper>
            <Styled.Label htmlFor={FILM_INPUT_ID}>Film</Styled.Label>

            <AutoCompleteInput
              onChange={handleFilmAutocompleteOnChange}
              options={filmAutocompleteOptions}
              placeholder="Search by film title…"
            />
          </Styled.FieldWrapper>

          <Styled.FieldWrapper>
            <Styled.Label htmlFor={REVIEW_INPUT_ID}>Review</Styled.Label>

            <Styled.TextArea
              id={REVIEW_INPUT_ID}
              onChange={handleReviewTextAreaOnChange}
            />
          </Styled.FieldWrapper>

          <Styled.SaveButton type="submit">Save Review</Styled.SaveButton>
        </Styled.Form>
      </MainContent>

      <Footer />
    </>
  );
};
