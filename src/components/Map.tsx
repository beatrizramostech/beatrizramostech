import React, { useEffect } from 'react';

const loadGoogleMapsScript = (apiKey: string) => {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
};

const Map: React.FC = () => {
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_KEY;
    if (apiKey) {
      loadGoogleMapsScript(apiKey);
    } else {
      console.error('Google Maps API key is not defined');
    }
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;