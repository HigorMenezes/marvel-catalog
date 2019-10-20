import React from 'react';
import {
  FormInput,
  CustomButton,
  ThumbnailPreview,
  Typography,
  SuccessCard,
} from '../../../../components';
import { Container } from './styles';

const CharacterEditForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  loading,
  touched,
  errors,
  submitWithSuccess,
}) => (
  <Container data-testid="CharacterEditForm">
    <form onSubmit={handleSubmit} className="form-controller">
      <FormInput
        variant="input"
        label="Character Name"
        id="character-name-input-id"
        type="text"
        handleChange={handleChange}
        handleBlur={handleBlur}
        inputValue={values.name}
        inputDisabled={loading}
        name="name"
        inputPlaceholder="Insert the character name"
        errorMessage={touched.name && errors.name}
      />
      <FormInput
        variant="textarea"
        rows={10}
        label="Character Description"
        id="character-description-input-id"
        type="text"
        handleChange={handleChange}
        handleBlur={handleBlur}
        inputValue={values.description}
        inputDisabled={loading}
        name="description"
        inputPlaceholder="Insert the character description"
        errorMessage={touched.description && errors.description}
      />
      <FormInput
        variant="input"
        label="Character Thumbnail URL"
        id="character-thumbnail-url-input-id"
        type="text"
        handleChange={handleChange}
        handleBlur={handleBlur}
        inputValue={values.thumbnail}
        inputDisabled={loading}
        name="thumbnail"
        inputPlaceholder="Insert the character thumbnail url"
        errorMessage={touched.thumbnail && errors.thumbnail}
      />
      <CustomButton
        buttonType="submit"
        buttonDisabled={loading}
        className="save-button"
      >
        Save
      </CustomButton>
      {submitWithSuccess && <SuccessCard>submit successfully</SuccessCard>}
      <Typography variant="h4">Thumbnail Preview</Typography>
      <ThumbnailPreview
        className="thumbnail-preview"
        thumbnailUrl={values.thumbnail}
        alt={`${values.name} thumbnail`}
      />
    </form>
  </Container>
);

export default CharacterEditForm;
