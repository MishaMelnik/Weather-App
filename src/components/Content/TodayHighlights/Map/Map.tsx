import React, { memo } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import styled from 'styled-components';

const MapWrapper = styled.div`
  width: 272px;
  height: 300px;
`;

const Map = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap(() => <GoogleMap defaultZoom={10} defaultCenter={{ lat: 34.101151, lng: -118.343719 }} />)
  );

  return (
    <MapWrapper>
      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&
                libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `450px` }} />}
        containerElement={<div style={{ height: `450px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </MapWrapper>
  );
};
export default memo(Map);
