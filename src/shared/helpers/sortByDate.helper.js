export const sortByDateAndTime = (arr) => {
  return arr.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
};
