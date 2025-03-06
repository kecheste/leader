"use client";

import { Check, Mail, Phone, Plus } from "lucide-react";
import { Lead } from "../types/Lead";
import { cn } from "../utils/cn";

interface LeadCardProps {
  lead: Lead;
}

export default function LeadCard({ lead }: LeadCardProps) {
  const currentStatusIndex = STATUS_ORDER.indexOf(lead.status);
  const currentStatusColor = STATUS_COLORS[lead.status];
  const currentLightColor = STATUS_LIGHT_COLORS[lead.status];

  const currentTextColor = currentStatusColor.replace("bg-", "text-");

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-600">
              {lead.name[0]}
            </span>
          </div>
          <div>
            <h2 className="text-lg font-semibold">{lead.name}</h2>
            <div className="flex items-center text-gray-400 text-sm">
              <Mail className="w-4 h-4 mr-1" />
              {lead.email}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 bg-gray-600 hover:bg-gray-500 rounded-full cursor-pointer">
            <Plus className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 bg-gray-600 hover:bg-gray-500 rounded-full cursor-pointer">
            <Phone className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-between space-x-1">
        {STATUS_ORDER.map((status, index) => (
          <div key={status} className="flex-1">
            <div
              className={cn(
                "w-full px-3 py-1.5 rounded-md text-center text-[12px] font-bold flex items-center justify-center",
                index === currentStatusIndex
                  ? `${currentStatusColor} text-white`
                  : index < currentStatusIndex
                  ? `${currentLightColor} ${currentTextColor}`
                  : "bg-gray-200 text-gray-600"
              )}
            >
              {index < currentStatusIndex && <Check className="w-4 h-4 mr-1" />}
              {status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
