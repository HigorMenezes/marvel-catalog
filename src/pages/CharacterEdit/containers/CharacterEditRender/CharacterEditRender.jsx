import React, { useState } from 'react';
import { Formik } from 'formik';
import { CharacterEditForm } from '../../components';
import { Container } from './styles';

const CharacterEditRender = ({ loading, character = {} }) => {
  const characterFormValues = {
    id: character.id || '',
    name: character.name || '',
    description: character.description || '',
    thumbnail: character.thumbnail || '',
  };

  function handleSubmitCharacterData(characterData, actions) {
    console.log(characterData);
  }

  return (
    <Container>
      <Formik
        enableReinitialize
        initialValues={characterFormValues}
        onSubmit={handleSubmitCharacterData}
        render={({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <CharacterEditForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            isSubmitting={isSubmitting}
          />
        )}
      />
    </Container>
  );
};

export default CharacterEditRender;
