import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import ControlPanel from './components/ControlPanel';
import LayerControl from './components/LayerControl';
import IncidentMarkers from './components/IncidentMarkers';

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <MapContainer
        center={[39.8283, -98.5795]}
        zoom={4}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <IncidentMarkers />
      </MapContainer>
      <ControlPanel />
      <LayerControl />
    </div>
  );
}

export default App;
