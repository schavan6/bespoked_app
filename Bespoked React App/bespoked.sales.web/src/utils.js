export const formatDate = (dateString) => {
  if (!dateString) {
    return;
  }

  const dateObj = new Date(dateString);

  return `${dateObj.getUTCMonth()}/${dateObj.getUTCDate()}/${dateObj.getUTCFullYear()}`;
};
