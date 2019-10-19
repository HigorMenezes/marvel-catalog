import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHARACTER_BY_ID } from './queries';
import CharacterEditRender from '../CharacterEditRender';
import { Container } from './styles';

const CharacterEditLoader = ({ characterId }) => {
  const { data: characterData, loading: characterLoading } = useQuery(
    GET_CHARACTER_BY_ID,
    {
      variables: {
        where: { id: characterId },
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  return (
    <Container>
      <CharacterEditRender
        loading={characterLoading}
        character={
          characterData &&
          characterData.characters &&
          characterData.characters[0]
        }
      />
    </Container>
  );
};

export default CharacterEditLoader;
