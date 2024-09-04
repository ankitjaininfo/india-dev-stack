export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    : "";

export const tags = [
  "development",
  "blockchain",
  "analytics",
  "cloud-storage",
  "saas",
  "devops",
  "cloud",
  "monitoring",
  "miscellaneous",
  "productivity",
  "design",
  "api",
  "testing",
  "security",
];