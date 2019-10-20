import React from 'react';
import { Formik } from 'formik';
import { characterSchema } from '../../validations';
import { Loading } from '../../../../components';
import { CharacterEditForm } from '../../components';
import { Container } from './styles';

const CharacterEditRender = ({
  loading,
  character = {},
  handleSubmitCharacter,
  submitWithSuccess,
}) => {
  const characterFormValues = {
    id: character.id || '',
    name: character.name || '',
    description: character.description || '',
    thumbnail: character.thumbnail || '',
  };

  return (
    <Container data-testid="CharacterEditRender">
      <Loading loading={loading} />
      <Formik
        enableReinitialize
        initialValues={characterFormValues}
        onSubmit={handleSubmitCharacter}
        validationSchema={characterSchema}
        render={({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <CharacterEditForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            touched={touched}
            errors={errors}
            loading={loading}
            submitWithSuccess={submitWithSuccess}
          />
        )}
      />
    </Container>
  );
};

export default CharacterEditRender;
