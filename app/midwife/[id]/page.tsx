'use client';

import Image from 'next/image';
import { midwivesData } from '@/data/midwives';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import BookingModal from '@/components/BookingModal';

interface PageProps {
  params: {
    id: string;
  };
}

export default function MidwifeProfile({ params }: PageProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const midwife = midwivesData.find(m => m.id === params.id);

  if (!midwife) {
    notFound();
  }
  
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-5xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image */}
              <div className="w-full md:w-64 h-64 relative rounded-lg overflow-hidden">
                <Image
                  src={midwife.imageUrl}
                  alt={midwife.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-900">{midwife.name}</h1>
                    <p className="text-[#AD6E9D] mt-1">{midwife.title}</p>
                  </div>
                  <button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="bg-[#AD6E9D] text-white px-6 py-2 rounded-full hover:bg-[#AD6E9D]/90 transition-colors"
                  >
                    Book Appointment
                  </button>
                </div>

                {/* Experience & Languages */}
                <div className="mt-4 space-y-2">
                  <p className="flex items-center text-gray-600">
                    <span className="w-32">Years of Experience:</span>
                    <span>{midwife.experience}</span>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="w-32">Languages Spoken:</span>
                    <span>{midwife.languages.join(", ")}</span>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="w-32">Location:</span>
                    <span>{midwife.location}</span>
                  </p>
                </div>

                {/* About Me */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-[#AD6E9D] mb-3">👋 About Me</h2>
                  <p className="text-gray-600 leading-relaxed">{midwife.about}</p>
                </div>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-[#AD6E9D] mb-4">💫 My Areas of Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {midwife.expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-[#AD6E9D]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* What Others Say */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-[#AD6E9D] mb-4">⭐ What Others Say</h2>
              <div className="space-y-4">
                {midwife.reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{review.content}"</p>
                    <p className="text-sm text-gray-500 mt-2">- {review.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        midwife={midwife}
      />
    </>
  );
} 