import React from 'react';

import {
  CharacterCard,
  FetchMoreDataButton,
  Loading,
} from '../../../../components';

import { Container } from './styles';

const CardCatalogRender = ({
  characters = [],
  loading,
  handleClickOnCard,
  handleFetchMoreCharacters,
  thereAreMoreCharacters,
}) => (
  <Container>
    <Loading loading={loading} />
    <div className="card-characters-list">
      {characters.map(({ name, thumbnail, id }) => (
        <div key={id} className="character-card">
          <CharacterCard
            name={name}
            thumbnail={thumbnail}
            handleClickOnCard={() => handleClickOnCard(id)}
          />
        </div>
      ))}
      {!loading && characters.length === 0 && <p>No data found</p>}
    </div>

    <div className="fetch-more-data-box">
      {thereAreMoreCharacters && !loading && characters.length > 0 && (
        <FetchMoreDataButton type="button" onClick={handleFetchMoreCharacters}>
          Fetch more data
        </FetchMoreDataButton>
      )}
    </div>
  </Container>
);

export default CardCatalogRender;
