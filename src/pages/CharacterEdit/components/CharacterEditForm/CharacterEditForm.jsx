import React from 'react';
import {
  FormInput,
  CustomButton,
  ThumbnailPreview,
} from '../../../../components';
import { Container } from './styles';

const CharacterEditForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  isSubmitting,
}) => (
  <Container>
    <form onSubmit={handleSubmit} className="form">
      <FormInput
        variant="input"
        label="Character Name"
        id="character-name-input-id"
        type="text"
        handleChange={handleChange}
        handleBlur={handleBlur}
        inputValue={values.name}
        name="name"
        inputPlaceholder="Insert the character name"
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
        name="description"
        inputPlaceholder="Insert the character description"
      />
      <FormInput
        variant="input"
        label="Character Thumbnail URL"
        id="character-thumbnail-url-input-id"
        type="text"
        handleChange={handleChange}
        handleBlur={handleBlur}
        inputValue={values.thumbnail}
        name="thumbnail"
        inputPlaceholder="Insert the character thumbnail url"
      />
      <ThumbnailPreview
        className="thumbnail-preview"
        thumbnailUrl={values.thumbnail}
        alt={`${values.name} thumbnail`}
      />
      <CustomButton buttonType="submit" disabled={isSubmitting}>
        Save
      </CustomButton>
    </form>
  </Container>
);

export default CharacterEditForm;
