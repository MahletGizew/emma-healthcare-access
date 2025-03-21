import React from "react";

const StatSection = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12 py-12 px-12">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold p-2 text-[#53A4EC]">10K+</h2>
        <p className="text-gray-600 p-2">Girls supported</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold p-2 text-[#53A4EC]">20+</h2>
        <p className="text-gray-600 p-2">Partner hospitals</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold p-2 text-[#53A4EC]">95%</h2>
        <p className="text-gray-600 p-2">Users feel confident</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold p-2 text-[#53A4EC]">50K+</h2>
        <p className="text-gray-600 p-2">Consultations done</p>
      </div>
    </section>
  );
};

export default StatSection;
