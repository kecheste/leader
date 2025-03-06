export interface Lead {
  _id: string;
  name: string;
  email: string;
  status: "New" | "Engaged" | "Proposal Sent" | "Closed-Won" | "Closed-Lost";
  createdAt: string;
}
