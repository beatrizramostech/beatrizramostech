import React, { useEffect } from "react";
import useGoogleMaps from "../hooks/useGoogleMaps";

const Map: React.FC = () => {
  const apiKey = "YOUR_API_KEY"; // Substitua pela sua chave da API

  useGoogleMaps(apiKey);

  useEffect(() => {
    const initMap = () => {
      if (window.google) {
        const location = { lat: -20.131943, lng: -40.188682 };
        const map = new window.google.maps.Map(
          document.getElementById("map") as HTMLElement,
          {
            center: location,
            zoom: 15,
          }
        );
        new window.google.maps.Marker({
          position: location,
          map: map,
        });
      }
    };
    initMap();
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default Map;
