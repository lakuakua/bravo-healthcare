export const serviceCounties = [
  "Austin",
  "Brazoria",
  "Chambers",
  "Colorado",
  "Fort Bend",
  "Galveston",
  "Harris",
  "Liberty",
  "Matagorda",
  "Montgomery",
  "Walker",
  "Waller",
  "Wharton",
] as const;

export type ServiceCounty = (typeof serviceCounties)[number];
