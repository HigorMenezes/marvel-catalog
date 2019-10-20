import { combine, combineOne } from './combineCharacters';

describe('Helpers Test, combineCharacters', () => {
  it('should combine two array of characters', () => {
    const baseCharacters = [
      { id: 'id-test1', name: 'baseName1', thumbnail: 'baseThumbnail1' },
      { id: 'id-test2', name: 'baseName2', thumbnail: 'baseThumbnail2' },
      { id: 'id-test3', name: 'baseName3', thumbnail: 'baseThumbnail3' },
      { id: 'id-test4', name: 'baseName4', thumbnail: 'baseThumbnail4' },
    ];
    const replaceCharacters = [
      { id: 'id-test1', name: 'replaceName1', thumbnail: 'replaceThumbnail1' },
      { id: 'id-test2', name: 'replaceName2', thumbnail: 'replaceThumbnail2' },
    ];
    const combineResult = [
      { id: 'id-test1', name: 'replaceName1', thumbnail: 'replaceThumbnail1' },
      { id: 'id-test2', name: 'replaceName2', thumbnail: 'replaceThumbnail2' },
      { id: 'id-test3', name: 'baseName3', thumbnail: 'baseThumbnail3' },
      { id: 'id-test4', name: 'baseName4', thumbnail: 'baseThumbnail4' },
    ];

    expect(combine({ baseCharacters, replaceCharacters })).toStrictEqual(
      combineResult
    );
  });

  it('should combine one object and one array of characters', () => {
    const baseCharacter = {
      id: 'id-test1',
      name: 'baseName1',
      thumbnail: 'baseThumbnail1',
    };
    const replaceCharacters = [
      { id: 'id-test1', name: 'replaceName1', thumbnail: 'replaceThumbnail1' },
      { id: 'id-test2', name: 'replaceName2', thumbnail: 'replaceThumbnail2' },
    ];
    const combineResult = {
      id: 'id-test1',
      name: 'replaceName1',
      thumbnail: 'replaceThumbnail1',
    };

    expect(combineOne({ baseCharacter, replaceCharacters })).toStrictEqual(
      combineResult
    );
  });
});
