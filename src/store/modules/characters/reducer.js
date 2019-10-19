const INITIAL_STATE = {
  editedCharacters: [],
};

export default function charactersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@characters/ADD_EDITED_CHARACTER':
      return {
        ...state,
        editedCharacters: [
          ...state.editedCharacters.filter(
            editedCharacter => editedCharacter.id !== action.editedCharacter.id
          ),
          action.editedCharacter,
        ],
      };
    default:
      return state;
  }
}
