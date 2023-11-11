export const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  return date.getMonth() + 1 + "/" + date.getDate();
};
