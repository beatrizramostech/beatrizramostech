import { useEffect } from "react";

const useGoogleMaps = (apiKey: string) => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.google) {
          console.log("Google Maps API loaded successfully");
        }
      };

      script.onerror = () => {
        console.error("Error loading Google Maps API");
      };
    };

    if (!window.google) {
      loadScript();
    }
  }, [apiKey]);
};

export default useGoogleMaps;
