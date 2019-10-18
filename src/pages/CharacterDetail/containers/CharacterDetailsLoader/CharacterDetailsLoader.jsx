import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_CHARACTER_BY_ID } from './queries';

import { Loading } from '../../../../components';

import { Container } from './styles';

const CharacterDetailsLoader = ({ characterId }) => {
  const [character, setCharacter] = useState({});
  const { loading } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      where: { id: characterId },
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ characters }) => {
      setCharacter(characters[0]);
    },
  });

  return (
    <Container>
      {loading && <Loading />}
      <div className="character-detail-container">
        <div className="character-header">
          <span className="header">{character.name || ''}</span>
        </div>
        <div className="character-thumbnail">
          <div
            className="thumbnail"
            style={{ backgroundImage: `url(${character.thumbnail || ''})` }}
          />
        </div>
        <div className="character-description">
          <p className="description">
            {character.description ||
              'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CharacterDetailsLoader;
