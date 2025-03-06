"use client";

import { useState } from "react";
import { createLead } from "../services/leadService";
import { toast } from "react-toastify";

const LeadForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "New" as
      | "New"
      | "Engaged"
      | "Proposal Sent"
      | "Closed-Won"
      | "Closed-Lost",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createLead(formData);
      toast.success("Lead added successfully!");
      setFormData({ name: "", email: "", status: "New" });
      onSuccess();
    } catch (e) {
      toast.error("Error adding lead, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-white p-2 md:p-6 w-full space-y-4"
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
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-3 border rounded-md outline-none"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
      </div>

      <select
        name="status"
        className="p-3 border rounded-md outline-none w-full"
        value={formData.status}
        onChange={handleChange}
        disabled={loading}
      >
        <option value="New">New</option>
        <option value="Engaged">Engaged</option>
        <option value="Proposal Sent">Proposal Sent</option>
        <option value="Closed-Won">Closed-Won</option>
        <option value="Closed-Lost">Closed-Lost</option>
      </select>

      <button
        type="submit"
        className={`w-full p-3 rounded-md transition cursor-pointer 
          ${
            loading
              ? "bg-orange-400 cursor-not-allowed"
              : "bg-orange-600 hover:bg-orange-700 text-white"
          }`}
        disabled={loading}
      >
        {loading ? (
          <div className="flex justify-center items-center space-x-2">
            <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
            <span>Adding...</span>
          </div>
        ) : (
          "Add Lead"
        )}
      </button>
    </form>
  );
};

export default LeadForm;
