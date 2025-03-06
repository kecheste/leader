export const STATUS_ORDER = [
  "New",
  "Engaged",
  "Proposal Sent",
  "Closed-Won",
  "Closed-Lost",
];

export const STATUS_COLORS: Record<string, string> = {
  New: "bg-gray-600",
  Engaged: "bg-orange-600",
  "Proposal Sent": "bg-green-600 ",
  "Closed-Won": "bg-purple-600",
  "Closed-Lost": "bg-blue-600",
};

export const STATUS_LIGHT_COLORS: Record<string, string> = {
  New: "bg-gray-200 text-gray-600",
  Engaged: "bg-orange-200 text-orange-600",
  "Proposal Sent": "bg-green-200 text-green-600",
  "Closed-Won": "bg-purple-200 text-purple-600",
  "Closed-Lost": "bg-blue-200 text-blue-600",
};
