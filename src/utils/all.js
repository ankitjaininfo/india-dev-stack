export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    : "";

export const tags = [
  "Bug Reporting",
  "AI",
  "Software Debugging",
  "Chrome Extension",
  "API",
  "Mocking",
  "Service Virtualization",
  "Testing",
  "DORA Metrics",
  "Engineering Efficiency",
  "Open Source",
  "Software Development",
  "Collaboration",
];

export const Categories = [
  "development",
  "design",
  "collaboration",
  "productivity",
  "testing",
  "security",
  "miscellaneous",
  "api",
  "blockchain",
  "analytics",
  "cloud-storage",
  "saas",
  "devops",
  "cloud",
  "monitoring",
];