"use client";

import { useEffect, useState } from "react";
import { fetchLeads } from "../services/leadService";
import LeadCard from "./LeadCard";
import { Lead } from "../types/Lead";

const LeadList = ({ reload }: { reload: boolean }) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadLeads = async () => {
      setLoading(true);
      const data = await fetchLeads();
      setLeads(data);
      setLoading(false);
    };
    loadLeads();
  }, [reload]);

  return (
    <div className="mt-6">
      {loading ? (
        <div className="flex justify-center items-center py-6">
          <div className="w-6 h-6 border-3 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      ) : leads.length == 0 ? (
        <div className="flex justify-center items-center py-6">
          <p className="text-xl font-medium">No leads found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {leads.map((lead) => (
            <LeadCard key={lead._id} lead={lead} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LeadList;
