import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Container } from './styles';

const CharacterEditButton = ({ handleEditCharacter }) => (
  <Container data-testid="CharacterEditButton">
    <button
      type="button"
      className="edit-character"
      onClick={handleEditCharacter}
    >
      <span className="text">Edit Character</span>
      <div className="edit-icon-container">
        <FiEdit className="edit-icon" />
      </div>
    </button>
  </Container>
);

export default CharacterEditButton;
