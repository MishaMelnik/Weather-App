import React, { useContext } from 'react';
// PACKAGES
import { GoogleMap, Marker } from '@react-google-maps/api';
import styled from 'styled-components';
// SIZES
import { size } from '../../../../styles/theme/sizes';
import { GlobalContext } from '../../../../context/GlobalState';

const MapWrapper = styled.div`
  width: 272px;
  height: 320px;
  @media (max-width: ${size.laptopL}) {
    width: 100%;
  }
`;
const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '12px',
  boxShadow: '0 4px 14px -4px rgba(0, 0, 0, 0.25)',
};

const Map = () => {
  const { currentWeather } = useContext(GlobalContext);
  console.log(currentWeather);
  const center = {
    lat: currentWeather[0]?.lat,
    lng: currentWeather[0]?.lon,
  };
  return (
    <MapWrapper>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </MapWrapper>
  );
};
export default Map;
