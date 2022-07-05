import React, { memo } from 'react';
// PACKAGES
// TODO: import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';
// SIZES
import { size } from '../../../../styles/theme/sizes';

const MapWrapper = styled.div`
  width: 272px;
  height: 320px;
  @media (max-width: ${size.laptopL}) {
    width: 100%;
  }
`;
// const containerStyle = {
//   width: '100%',
//   height: '100%',
//   borderRadius: '12px',
//   boxShadow: '0 4px 14px -4px rgba(0, 0, 0, 0.25)',
// };
// const center = {
//   lat: 34.101151,
//   lng: -118.343719,
// };

const Map = () => {
  return (
    <MapWrapper>
      {/* <LoadScript googleMapsApiKey={`${process.env['REACT_APP_GOOGLE_MAPS_KEY']}`}>*/}
      {/*  <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />*/}
      {/* </LoadScript>*/}
    </MapWrapper>
  );
};
export default memo(Map);
