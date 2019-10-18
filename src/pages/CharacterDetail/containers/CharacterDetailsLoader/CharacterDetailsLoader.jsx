import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_CHARACTER_BY_ID, GET_SERIES_BY_CHARACTER_ID } from './queries';

import { Loading, Typography } from '../../../../components';

import { Container } from './styles';

const CharacterDetailsLoader = ({ characterId }) => {
  const [character, setCharacter] = useState({});
  const [seriesList, setSeriesList] = useState([]);

  const { loading: characterLoading } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      where: { id: characterId },
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ characters: charactersResult }) => {
      setCharacter(charactersResult[0]);
    },
  });

  const { loading: seriesLoading, fetchMore } = useQuery(
    GET_SERIES_BY_CHARACTER_ID,
    {
      variables: {
        where: { characters: [characterId] },
      },
      notifyOnNetworkStatusChange: true,
      onCompleted: ({ series: seriesResult }) => {
        setSeriesList(seriesResult);
      },
    }
  );

  return (
    <Container>
      {(characterLoading || seriesLoading) && <Loading />}
      <div className="character-detail-container">
        <div className="character-header">
          <span className="header">{character.name || ''}</span>
        </div>
        <div className="character-thumbnail">
          <img
            className="thumbnail"
            // style={{ backgroundImage: `url(${character.thumbnail || ''})` }}
            src={character.thumbnail}
            alt={character.name}
          />
        </div>
        <div className="character-content">
          <div className="character-description">
            <Typography variant="h2">Description</Typography>
            <p className="description">
              {character.description || 'No character description found'}
            </p>
          </div>
          <div className="character-series">
            <Typography variant="h2">Series</Typography>
            {seriesList.map(({ id, title, thumbnail, description }) => (
              <div key={id} className="series-container">
                <div className="series-thumbnail-container">
                  <img
                    className="series-thumbnail"
                    src={thumbnail}
                    alt={title}
                  />
                </div>
                <div className="series-content">
                  <div className="title">
                    <Typography variant="h3">
                      {title || 'No series title found'}
                    </Typography>
                  </div>
                  <div className="description">
                    <p>{description || 'No series description found'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CharacterDetailsLoader;
