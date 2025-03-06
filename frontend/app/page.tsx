"use client";

import { useState } from "react";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [reload, setReload] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-6 space-y-6">
          <LeadForm onSuccess={() => setReload(!reload)} />

          <LeadList reload={reload} />
        </div>
      </div>
    </div>
  );
}
