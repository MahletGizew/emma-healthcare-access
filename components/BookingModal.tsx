'use client';

import { Midwife } from "@/data/midwives";
import { useState } from "react";
import Image from "next/image";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  midwife: Midwife;
}

export default function BookingModal({ isOpen, onClose, midwife }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  });

  const treatments = [
    "Prenatal Care",
    "Postnatal Care",
    "Birth Planning",
    "Lactation Consultation",
    "Family Planning",
    "General Consultation"
  ];

  const appointmentTypes = [
    "In-Person Visit",
    "Video Consultation",
    "Home Visit"
  ];

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && selectedTreatment && selectedType) {
      setStep(2);
    } else if (step === 2 && formData.email) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Handle the final submission here
    console.log({
      treatment: selectedTreatment,
      appointmentType: selectedType,
      ...formData,
      midwife: midwife.name
    });
    // Reset form and close
    setStep(1);
    setSelectedTreatment("");
    setSelectedType("");
    setFormData({ fullName: "", email: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-8 relative">
        <h2 className="text-3xl font-semibold text-[#AD6E9D] text-center mb-8">
          Book Appointment
        </h2>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <p className="text-lg font-medium mb-4">Please Select Service</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Treatment</label>
                  <div className="relative">
                    <select
                      value={selectedTreatment}
                      onChange={(e) => setSelectedTreatment(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-[#AD6E9D]"
                    >
                      <option value="">Select Treatment</option>
                      {treatments.map((treatment) => (
                        <option key={treatment} value={treatment}>
                          {treatment}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Appointment Type</label>
                  <div className="relative">
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-[#AD6E9D]"
                    >
                      <option value="">Select Appointment Type</option>
                      {appointmentTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Doctor</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={midwife.name}
                      disabled
                      className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <p className="text-lg font-medium mb-4">Fill in Your Personal Details</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#AD6E9D]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#AD6E9D]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-[#AD6E9D]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#AD6E9D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold">Appointment Confirmed!</h3>
            <p className="text-gray-600">
              Thank you{formData.fullName ? `, ${formData.fullName}` : ''}! Your appointment with {midwife.name} has been successfully scheduled. A
              confirmation email with the meeting details has been sent to {formData.email}.
            </p>
            <button
              onClick={handleSubmit}
              className="w-full max-w-xs mx-auto px-6 py-2 bg-[#AD6E9D] text-white rounded-full hover:bg-[#AD6E9D]/90 transition-colors"
            >
              Go to Home
            </button>
          </div>
        )}

        {step !== 3 && (
          <div className="flex gap-4 justify-end mt-8">
            {step === 2 && (
              <button
                onClick={handleBack}
                className="px-6 py-2 border border-[#AD6E9D] text-[#AD6E9D] rounded-full hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={step === 1 ? onClose : handleBack}
              className="px-6 py-2 border border-[#AD6E9D] text-[#AD6E9D] rounded-full hover:bg-gray-50 transition-colors"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </button>
            <button
              onClick={handleNext}
              disabled={step === 1 ? !selectedTreatment || !selectedType : !formData.email}
              className={`px-6 py-2 rounded-full transition-colors ${
                (step === 1 ? !selectedTreatment || !selectedType : !formData.email)
                  ? 'bg-gray-300 text-white cursor-not-allowed'
                  : 'bg-[#AD6E9D] text-white hover:bg-[#AD6E9D]/90'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 