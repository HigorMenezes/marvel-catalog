export function addEditedCharacter(editedCharacter) {
  return {
    type: '@characters/ADD_EDITED_CHARACTER',
    editedCharacter,
  };
}
