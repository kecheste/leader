"use client";

import { useState } from "react";
import { createLead } from "../services/leadService";

const LeadForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    status: "New" | "Engaged" | "Proposal Sent" | "Closed-Won" | "Closed-Lost";
  }>({ name: "", email: "", status: "New" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createLead(formData);
    setFormData({ name: "", email: "", status: "New" });
    onSuccess();
  };

  return (
    <form
      className="bg-white p-6 shadow-md rounded-lg space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-semibold">Add New Lead</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Lead Name"
          className="p-3 border rounded-md outline-none"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-3 border rounded-md outline-none"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <select
        name="status"
        className="p-3 border rounded-md outline-none w-full"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="New">New</option>
        <option value="Engaged">Engaged</option>
        <option value="Proposal Sent">Proposal Sent</option>
        <option value="Closed-Won">Closed-Won</option>
        <option value="Closed-Lost">Closed-Lost</option>
      </select>

      <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition">
        Add Lead
      </button>
    </form>
  );
};

export default LeadForm;
