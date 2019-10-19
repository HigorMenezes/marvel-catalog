import * as yup from 'yup';

export const characterSchema = yup.object().shape({
  name: yup.string().required('Character name is required'),
  description: yup.string(),
  thumbnail: yup.string().required('Character thumbnail is required'),
});
