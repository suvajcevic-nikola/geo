import MapboxGL from "@rnmapbox/maps";

export const TripViewer = ({ coordinates }) => {
  return (
    <MapboxGL.MapView style={{ flex: 1 }}>
      <MapboxGL.Camera
        zoomLevel={12}
        centerCoordinate={coordinates[0]}
        animationMode="flyTo"
        animationDuration={2000}
      />

      <MapboxGL.ShapeSource
        id="tripSource"
        shape={{ type: "LineString", coordinates }}
      >
        <MapboxGL.LineLayer
          id="tripLayer"
          style={{ lineColor: "red", lineWidth: 3 }}
        />
      </MapboxGL.ShapeSource>
    </MapboxGL.MapView>
  );
};
