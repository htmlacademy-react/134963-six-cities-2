import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferType } from '../../types/offer';
import iconUrl from '../../../markup/img/pin.svg';
import activeIconUrl from '../../../markup/img/pin-active.svg';

type TMapProps = {
  offers: OfferType[];
  mapClass: string;
  activeOfferId: string | null | undefined;
};

function Map({ offers, mapClass, activeOfferId }: TMapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && offers.length > 0) {
      map.current = L.map(mapRef.current, {
        center: [offers[0].location.latitude, offers[0].location.longitude],
        zoom: 13,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map.current);

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

      const centerMapOnMarker = (marker: L.Marker) => {
        if (map.current) {
          map.current.setView(marker.getLatLng(), map.current.getZoom());
        }
      };

      if (map.current) {
        map.current.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            map.current!.removeLayer(layer);
          }
        });
      }

      offers.forEach((offer) => {
        const marker = L.marker(
          [offer.location.latitude, offer.location.longitude],
          {
            icon: offer.id === activeOfferId ? activeCustomIcon : customIcon,
          }
        ).addTo(map.current!);

        marker.on('click', function (this: L.Marker) {
          centerMapOnMarker(this);
        });
      });

      if (activeOfferId) {
        const activeOffer = offers.find((offer) => offer.id === activeOfferId);
        if (activeOffer) {
          const activeMarker = L.marker([activeOffer.location.latitude, activeOffer.location.longitude], {
            icon: activeCustomIcon,
          }).addTo(map.current);
          centerMapOnMarker(activeMarker);
        }
      }

      return () => {
        map.current?.remove();
      };
    }
  }, [offers, activeOfferId]);

  return <section ref={mapRef} className={mapClass}></section>;
}

export default Map;
