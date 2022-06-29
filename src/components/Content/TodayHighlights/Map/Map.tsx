import React from 'react';
// PACKAGES
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '272px',
  height: '300px',
  borderRadius: '12px',
  boxShadow: '0 4px 14px -4px rgba(0, 0, 0, 0.25)',
};

const center = {
  lat: 34.101151,
  lng: -118.343719,
};

const Map = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyB5XqdWdKPEm1gVyQ-uFdbA8IlvUWge2Js">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
      </LoadScript>
    </div>
  );
};
export default Map;
