import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation'; // Replace with the actual geolocation library you're using

interface ILocation {
  lat: number | null;
  lon: number | null;
}

const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<ILocation>({
    lat: null,
    lon: null,
  });

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        Geolocation.getCurrentPosition(info =>
          setUserLocation({
            lat: info.coords.latitude,
            lon: info.coords.longitude,
          }),
        );
      } catch (error) {
        console.error('Error getting user location:', error);
        // Handle error if needed
      }
    };

    // Check if userLocation is not already defined before fetching the location
    if (userLocation.lat === null || userLocation.lon === null) {
      getUserLocation();
    }
  }, [userLocation]);

  return userLocation;
};

export default useUserLocation;
