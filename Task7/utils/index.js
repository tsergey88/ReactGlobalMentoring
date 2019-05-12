export const getYear = string => {
  if (string) {
    return string.split("-")[0];
  }
};
