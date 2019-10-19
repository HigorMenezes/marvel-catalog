export const generateVariables = ({ offset, limit, search }) => {
  const variables = {
    offset,
    limit,
  };
  if (search) {
    variables.where = {
      nameStartsWith: search,
    };
  }

  return variables;
};
