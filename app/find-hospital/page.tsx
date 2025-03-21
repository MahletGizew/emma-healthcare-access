// pages/find-a-hospital.tsx
import Head from "next/head";
import React from "react";
import Map from "@/components/map";
import HospitalCard from "@/components/hospitalcard";

const FindAHospital: React.FC = () => {
  // Sample data for hospitals
  const hospitals = [
    {
      name: "Tirunesh Beijing Hospital",
      emergencyCare: "24/7 critical care for urgent medical needs",
      bedCapacity: "50 beds",
      address: "Addis Ababa, Ethiopia",
      phone: "+251 8 999 7722",
    },
    {
      name: "St. Paul's Hospital",
      emergencyCare: "24/7 emergency services",
      bedCapacity: "100 beds",
      address: "Addis Ababa, Ethiopia",
      phone: "+251 8 123 4567",
    },
    {
      name: "Black Lion Hospital",
      emergencyCare: "Specialized care available",
      bedCapacity: "75 beds",
      address: "Addis Ababa, Ethiopia",
      phone: "+251 8 987 6543",
    },
    {
      name: "Yekatit 12 Hospital",
      emergencyCare: "General emergency services",
      bedCapacity: "60 beds",
      address: "Addis Ababa, Ethiopia",
      phone: "+251 8 345 6789",
    },
  ];

  return (
    <>
      <Head>
        <title>Find a Hospital | EMMA</title>
      </Head>

      {/* Main Content */}
      <main className="container mx-auto p-4 grid grid-cols-12 gap-4 relative">
        {/* Sidebar with Hospital Cards */}
        <aside className="col-span-4 bg-white p-4 rounded-lg shadow-md overflow-y-auto max-h-[calc(100vh-128px)]">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex justify-between mb-4">
            {/* Filters */}
            <div>
              <label htmlFor="show-map" className="text-gray-600">
                Show on map
              </label>
              <select
                id="show-map"
                className="border border-gray-300 px-2 py-1 rounded-md"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label htmlFor="sort-by" className="text-gray-600">
                Sort By:
              </label>
              <select
                id="sort-by"
                className="border border-gray-300 px-2 py-1 rounded-md"
              >
                <option value="nearest">Nearest</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
          {/* Hospital Cards */}
          {hospitals.map((hospital, index) => (
            <HospitalCard key={index} hospital={hospital} />
          ))}
        </aside>

        {/* Map */}
        <div className="col-span-8 bg-white p-4 rounded-lg shadow-md overflow-hidden z-10">
          <Map />
        </div>
      </main>
    </>
  );
};

export default FindAHospital;