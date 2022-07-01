import React from 'react';
// PACKAGES
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';

const MapWrapper = styled.div`
  width: 272px;
  height: 300px;
  @media (max-width: 1280px) {
    height: 100%;
  }
  @media (max-width: 1024px) {
    height: 300px;
    width: 100%;
  }
`;
const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '12px',
  boxShadow: '0 4px 14px -4px rgba(0, 0, 0, 0.25)',
};
const center = {
  lat: 34.101151,
  lng: -118.343719,
};

const Map = () => {
  return (
    <MapWrapper>
      <LoadScript googleMapsApiKey="AIzaSyB5XqdWdKPEm1gVyQ-uFdbA8IlvUWge2Js">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
      </LoadScript>
    </MapWrapper>
  );
};
export default Map;
