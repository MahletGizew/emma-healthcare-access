// components/Map.tsx
'use client'
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import * as L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "leaflet-search/src/leaflet-search.css"; // Import Search Control CSS
import "leaflet-search"; // Import Search Control plugin

// Dynamically import Leaflet with no SSR
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => <div className="h-[500px] bg-gray-100 rounded-lg animate-pulse" />
});

const Map: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-[500px] bg-gray-100 rounded-lg animate-pulse" />;
  }

  return <MapComponent />;
};

export default Map;