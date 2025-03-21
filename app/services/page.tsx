'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { midwivesData, Midwife } from '@/data/midwives';
import { useLanguage } from '@/app/context/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  // Function to calculate distance between two points
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  // Function to get user's location
  const getUserLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsLocating(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLocating(false);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
      setIsLocating(false);
    }
  };

  // Repeat the midwives data to ensure there are at least 15 midwives
  const repeatedMidwivesData = [...midwivesData, ...midwivesData, ...midwivesData].slice(0, 15);

  // Filter and sort midwives based on search query and location
  const filteredMidwives = repeatedMidwivesData
    .filter(midwife =>
      midwife.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      midwife.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      midwife.specialties?.some(specialty =>
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      ) || false
    )
    .sort((a, b) => {
      if (userLocation && a.coordinates && b.coordinates) {
        try {
          const distanceA = calculateDistance(
            userLocation.lat,
            userLocation.lng,
            a.coordinates.lat,
            a.coordinates.lng
          );
          const distanceB = calculateDistance(
            userLocation.lat,
            userLocation.lng,
            b.coordinates.lat,
            b.coordinates.lng
          );
          return distanceA - distanceB;
        } catch (error) {
          console.error('Error calculating distance:', error);
          return 0;
        }
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('meetMidwives')}</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            {t('midwivesSubtitle')}
          </p>

          {/* Search and Location Section */}
          <div className="flex flex-col items-center gap-4 max-w-xl mx-auto mb-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search by name, location, or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#AD6E9D]"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <button
              onClick={getUserLocation}
              className="w-full px-6 py-3 bg-[#AD6E9D] text-white rounded-lg hover:bg-[#AD6E9D]/90 transition-colors flex items-center justify-center gap-2"
              disabled={isLocating}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {isLocating ? 'Getting Location...' : (userLocation ? 'Update My Location' : 'Use My Location')}
            </button>
          </div>

          {userLocation && (
            <p className="text-sm text-gray-600 mb-8">
              Showing midwives sorted by distance from your location
            </p>
          )}
        </div>

        {/* Midwives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredMidwives.map((midwife, index) => (
            <div key={`${midwife.id}-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link
                href={`/midwife/${midwife.id}`}
                className="block"
              >
                <div className="relative h-64">
                  <Image
                    src={midwife.imageUrl}
                    alt={midwife.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-800">{midwife.name}</h3>
                  <p className="text-[#AD6E9D] text-sm mb-2">{midwife.title}</p>
                  <p className="text-gray-600 text-sm mb-2">{midwife.location}</p>
                  <p className="text-gray-500 text-sm mb-2">{midwife.experience}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {midwife.specialties?.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-[#AD6E9D]/10 text-[#AD6E9D] text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Contact Icons */}
              <div className="flex justify-center gap-4 p-4 pt-0">
                <button
                  className="text-[#AD6E9D] hover:text-[#AD6E9D]/80 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `tel:+44123456789`;
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
                <button
                  className="text-[#AD6E9D] hover:text-[#AD6E9D]/80 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `mailto:${midwife.name.toLowerCase().replace(' ', '.')}@emma-healthcare.com`;
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}