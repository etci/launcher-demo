import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "90vh",
};

interface Location {
  title: string;
  latitude: string;
  longitude: string;
}
interface Props {
  locations: Location[];
}
const Map: React.FC<Props> = ({ locations }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  console.log({ locations });

  const [, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(
      new google.maps.LatLng(85, -180), // top left corner of map
      new google.maps.LatLng(-85, 180),
    );
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap zoom={0} onLoad={onLoad} onUnmount={onUnmount} mapContainerStyle={containerStyle}>
      {locations.map(({ latitude, longitude, title }) => {
        return (
          <Marker
            key={`${latitude}-${longitude}`}
            position={{
              lat: +latitude,
              lng: +longitude,
            }}
            clickable
            title={title}
            zIndex={100}
          />
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
