"use client";

import { useState } from "react";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [reload, setReload] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div
        className={`flex-1 flex flex-col relative transition-all duration-300 ${
          showForm ? "opacity-50 blur-sm" : ""
        }`}
      >
        <Navbar setShowForm={setShowForm} />

        <div className="px-2 md:px-6 space-y-2 md:space-y-6 overflow-y-scroll pb-6">
          <LeadList reload={reload} />
        </div>
      </div>

      {showForm && (
        <div
          className="fixed inset-0 bg-black opacity-80 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setShowForm(false)} // Close form when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <LeadForm
              onSuccess={() => {
                setReload(!reload);
                setShowForm(false);
              }}
            />
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
