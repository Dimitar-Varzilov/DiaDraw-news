export const getSummary = (string: string, length = 150) => {
  if (string.length <= length) return string;

  return string.substring(0, length).concat("...");
};

