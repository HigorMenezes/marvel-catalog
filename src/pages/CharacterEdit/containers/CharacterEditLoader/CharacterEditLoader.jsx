import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';

import { GET_CHARACTER_BY_ID } from './queries';
import { addEditedCharacter } from '../../../../store/modules/characters/actions';
import { combineOne } from '../../../../helpers/combineCharacters';
import CharacterEditRender from '../CharacterEditRender';
import { Container } from './styles';

const CharacterEditLoader = ({ characterId }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitWithSuccess, setSubmitWithSuccess] = useState(false);
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters);
  const { data: characterData, loading: characterLoading } = useQuery(
    GET_CHARACTER_BY_ID,
    {
      variables: {
        where: { id: characterId },
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  function handleSubmitCharacter(character) {
    setSubmitting(true);
    dispatch(addEditedCharacter(character));
    setSubmitting(false);
    setSubmitWithSuccess(true);
  }

  return (
    <Container>
      <CharacterEditRender
        loading={characterLoading || submitting}
        character={
          characterData &&
          characterData.characters &&
          combineOne({
            baseCharacter: characterData.characters[0],
            replaceCharacters: characters.editedCharacters,
          })
        }
        submitWithSuccess={submitWithSuccess}
        handleSubmitCharacter={handleSubmitCharacter}
      />
    </Container>
  );
};

export default CharacterEditLoader;
