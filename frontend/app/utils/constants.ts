const STATUS_ORDER = [
  "New",
  "Engaged",
  "Proposal Sent",
  "Closed-Won",
  "Closed-Lost",
];

const STATUS_COLORS: Record<string, string> = {
  New: "bg-gray-600",
  Engaged: "bg-orange-600",
  "Proposal Sent": "bg-green-600",
  "Closed-Won": "bg-purple-600",
  "Closed-Lost": "bg-blue-600",
};

const STATUS_LIGHT_COLORS: Record<string, string> = {
  New: "bg-gray-200",
  Engaged: "bg-orange-200",
  "Proposal Sent": "bg-green-200",
  "Closed-Won": "bg-purple-200",
  "Closed-Lost": "bg-blue-200",
};
