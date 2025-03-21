// components/HospitalCard.tsx
import React from "react";

interface Hospital {
  name: string;
  emergencyCare: string;
  bedCapacity: string;
  address: string;
  phone: string;
}

interface HospitalCardProps {
  hospital: Hospital;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-primary">{hospital.name}</h3>
          <p className="text-gray-600">{hospital.emergencyCare}</p>
          <p className="text-gray-600">
            Bed Capacity:{" "}
            <span className="font-semibold">{hospital.bedCapacity}</span>
          </p>
          <p className="text-gray-600">
            Address: <span className="font-semibold">{hospital.address}</span>
          </p>
          <p className="text-gray-600">
            Phone: <span className="font-semibold">{hospital.phone}</span>
          </p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90">
          Details
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;