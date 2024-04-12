import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferType, City } from '../../types/offer';
import iconUrl from '../../../markup/img/pin.svg';
import activeIconUrl from '../../../markup/img/pin-active.svg';
import useMap from '../../hooks/use-map';

type TMapProps = {
  offers: OfferType[];
  city: City;
  mapClass: string;
  activeOfferId: string | null;
};

const customIcon = L.icon({
  iconUrl,
  iconSize: [26, 39],
  iconAnchor: [13, 39],
});

const activeCustomIcon = L.icon({
  iconUrl: activeIconUrl,
  iconSize: [26, 39],
  iconAnchor: [13, 39],
});

function Map({
  offers,
  mapClass,
  activeOfferId,
  city,
}: TMapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (map) {
      markersRef.current.forEach((marker) => {
        map.removeLayer(marker);
      });
      markersRef.current = [];

      offers.forEach((offer) => {
        const marker = L.marker(
          [offer.location.latitude, offer.location.longitude],
          {
            icon: offer.id === activeOfferId ? activeCustomIcon : customIcon,
          }
        ).addTo(map);

        marker.on('click', function (this: L.Marker) {
          map.setView(this.getLatLng(), map.getZoom());
        });

        markersRef.current.push(marker);
      });

      const activeMarker = markersRef.current.find(
        (marker) => marker.options.icon === activeCustomIcon
      );
      if (activeMarker) {
        map.setView(activeMarker.getLatLng(), map.getZoom());
      }
    }
  }, [map, offers, activeOfferId]);

  return <section ref={mapRef} className={clsx(mapClass, 'map')}></section>;
}

export default Map;
