export function combine({ baseCharacters = [], replaceCharacters = [] }) {
  return baseCharacters.map(baseCharacter => {
    const replaceCharacter = replaceCharacters.find(
      character => character.id === baseCharacter.id
    );

    if (replaceCharacter) {
      return replaceCharacter;
    }

    return baseCharacter;
  });
}

export function combineOne({ baseCharacter = {}, replaceCharacters = [] }) {
  const replaceCharacter = replaceCharacters.find(
    character => character.id === baseCharacter.id
  );

  if (replaceCharacter) {
    return replaceCharacter;
  }

  return baseCharacter;
}
