import axios from "axios";
import { Lead } from "../types/Lead";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Fetch all leads
export const fetchLeads = async (): Promise<Lead[]> => {
  const response = await axios.get(`${API_URL}/leads`);
  return response.data;
};

// Create a new lead
export const createLead = async (lead: Omit<Lead, "_id" | "createdAt">) => {
  const response = await axios.post(`${API_URL}/leads`, lead);
  return response.data;
};
