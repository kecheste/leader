"use client";

import { useEffect, useState } from "react";
import { fetchLeads } from "../services/leadService";
import LeadCard from "./LeadCard";
import { Lead } from "../types/Lead";

const LeadList = ({ reload }: { reload: boolean }) => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const loadLeads = async () => {
      const data = await fetchLeads();
      setLeads(data);
    };
    loadLeads();
  }, [reload]);

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
      {leads.map((lead) => (
        <LeadCard key={lead._id} lead={lead} />
      ))}
    </div>
  );
};

export default LeadList;
