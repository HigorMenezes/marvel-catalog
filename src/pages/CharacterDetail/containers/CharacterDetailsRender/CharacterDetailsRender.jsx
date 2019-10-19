import React from 'react';

import {
  Loading,
  Typography,
  FetchMoreDataButton,
} from '../../../../components';
import {
  CharacterHeader,
  CharacterThumbnail,
  CharacterDescription,
  CharacterSeries,
} from '../../components';

import { Container } from './styles';

const CharacterDetailsRender = ({
  loading,
  character = {},
  series = [],
  thereAreMoreSeries,
  handleFetchMoreSeries,
}) => (
  <Container>
    <Loading loading={loading} />
    <div className="character-detail-container">
      <CharacterHeader>{character.name || ''}</CharacterHeader>
      <CharacterThumbnail
        thumbnail={character.thumbnail}
        alt={character.name || ''}
      />
      <div className="character-content">
        <CharacterDescription
          description={
            character.description || 'No character description found'
          }
        />
        <div className="character-series">
          <Typography variant="h2">Series</Typography>
          {series.map(({ id, title, thumbnail, description }) => (
            <CharacterSeries
              key={id}
              title={title}
              thumbnail={thumbnail}
              description={description || 'no series description found'}
            />
          ))}
          <div className="fetch-more-data-box">
            {!loading && thereAreMoreSeries && (
              <FetchMoreDataButton
                type="button"
                onClick={handleFetchMoreSeries}
              >
                Fetch more data
              </FetchMoreDataButton>
            )}
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default CharacterDetailsRender;
