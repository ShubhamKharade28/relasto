'use client';

import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, toLonLat } from 'ol/proj';

const MyMap = ({ closeMap, setCityStreet }) => {
  const mapRef = useRef();
  const mapInstance = useRef();

  useEffect(() => {
    const newYorkCoordinates = [-74.0060, 40.7128];
    const transformedCoordinates = fromLonLat(newYorkCoordinates);
    
    mapInstance.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: transformedCoordinates,
        zoom: 12,
      }),
    });

    mapInstance.current.on('click', async (event) => {
      const coordinates = toLonLat(event.coordinate);
      const [lon, lat] = coordinates;

      // Reverse Geocoding
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );
        const data = await response.json();

        if (data && data.address) {
          const address = `${data.address.road || ''}, ${data.address.city || data.address.town || data.address.village || ''}`;
          setCityStreet(address);
        } else {
          alert('Address not found');
        }
      } catch (error) {
        console.error('Error fetching address:', error);
      }
      closeMap();
    });

    return () => {
      mapInstance.current.setTarget(null);
    };
  }, [setCityStreet]);

  return (
    <div className="fixed top-[25%] left-[20%] w-[50em] h-[20em] z-10 border rounded-lg overflow-hidden">
      <div ref={mapRef} className="w-full h-full" />
      <div
        className="absolute top-1 right-1 
        rounded-full text-sm font-bold h-6 w-6 flex justify-center items-center p-1 bg-white text-black"
        onClick={closeMap}
      >
        x
      </div>
    </div>
  );
};

export default MyMap;
