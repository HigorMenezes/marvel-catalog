import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Container } from './styles';

const CharacterEditButton = ({ handleEditCharacter }) => (
  <Container>
    <button
      type="button"
      className="edit-character"
      onClick={handleEditCharacter}
    >
      <span className="text">Edit Character</span>
      <span className="edit-icon-container">
        <FiEdit className="edit-icon" />
      </span>
    </button>
  </Container>
);

export default CharacterEditButton;
