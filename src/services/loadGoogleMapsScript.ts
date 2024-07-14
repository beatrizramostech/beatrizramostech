const loadGoogleMapsScript = (apiKey: string) => {
  return new Promise<void>((resolve, reject) => {
    if (document.getElementById('google-maps-script')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      reject(new Error('Failed to load the Google Maps script'));
    };

    document.body.appendChild(script);
  });
};
export default loadGoogleMapsScript;