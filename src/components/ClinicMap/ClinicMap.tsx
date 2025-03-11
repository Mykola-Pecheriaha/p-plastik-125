'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './ClinicMap.module.css';

const ClinicMap = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      mapContainerRef.current &&
      !mapRef.current
    ) {
      const fetchCoordinates = async () => {
        const address = 'вул. Героїв Майдану 226, Чернівці, Україна';
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
          );
          const data = await response.json();
          if (data && data.length > 0) {
            const { lat, lon } = data[0];
            const clinicLocation: L.LatLngExpression = [
              Number.parseFloat(lat),
              Number.parseFloat(lon),
            ];

            const newMap = L.map(mapContainerRef.current!, {
              center: clinicLocation,
              zoom: 18,
              zoomControl: true,
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution:
                '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(newMap);

            const baseMaps = {
              Карта: L.tileLayer(
                'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                {
                  attribution:
                    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }
              ),
              Супутник: L.tileLayer(
                'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                {
                  attribution: '© <a href="https://www.esri.com/">Esri</a>',
                }
              ),
            };

            L.control.layers(baseMaps).addTo(newMap);

            const marker = L.marker(clinicLocation).addTo(newMap);
            marker
              .bindPopup(
                '<b>Клініка пластичної хірургії</b><br>вул. Героїв Майдану 226, Чернівці'
              )
              .openPopup();

            mapRef.current = newMap;

            // Додаємо стилі для контролів карти
            const style = document.createElement('style');
            style.textContent = `
              .leaflet-control-zoom {
                margin: 15px !important;
              }
              .leaflet-control-layers {
                margin: 15px !important;
              }
            `;
            document.head.appendChild(style);
          }
        } catch (error) {
          console.error('Помилка при отриманні координат:', error);
        }
      };

      fetchCoordinates();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return <div ref={mapContainerRef} className={styles.map}></div>;
};

export default ClinicMap;
