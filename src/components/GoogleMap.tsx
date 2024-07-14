import React, { useEffect, useRef } from 'react';
import loadGoogleMapsScript from '../services/loadGoogleMapsScript';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_KEY;

    if (!apiKey) {
      console.error('Google Maps API key is not defined');
      return;
    }

    const initMap = async () => {
      const position = { lat: -20.131943, lng: -40.188682 };

      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      if (mapRef.current) {
        const map = new Map(mapRef.current, {
          center: position,
          zoom: 15,
          mapId: import.meta.env.VITE_MAP_ID,
        });
        new AdvancedMarkerElement({
          position: position,
          map,
          title: "Beatriz Ramos Tech",
        });
      }
    };

    loadGoogleMapsScript(apiKey)
      .then(initMap)
      .catch((err) => {
        console.error('Error loading Google Maps script:', err);
      });
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default GoogleMap;
