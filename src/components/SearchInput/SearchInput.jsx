import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

const SearchInput = ({ value, onChange, onSubmit }) => (
  <Container>
    <form className="input-container" onSubmit={onSubmit}>
      <input
        id="search-id"
        type="text"
        className="input"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <button className="icon-container" type="submit">
        <MdSearch className="icon" />
      </button>
    </form>
  </Container>
);

export default SearchInput;
