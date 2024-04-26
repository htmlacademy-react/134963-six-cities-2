import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/offer';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City | null
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  const tileLayer = new TileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const defaultCoords = { lat: 48.8566, lng: 2.3522 };
      const instance = new Map(mapRef.current, {
        center: city
          ? {
            lat: city.location.latitude,
            lng: city.location.longitude,
          }
          : defaultCoords,
        zoom: city ? 10 : 13,
      });

      instance.addLayer(tileLayer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
