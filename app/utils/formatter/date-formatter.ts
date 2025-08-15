export const formatDate = (rawDate: string) => {
  return new Date(rawDate).toLocaleDateString("en-EN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
