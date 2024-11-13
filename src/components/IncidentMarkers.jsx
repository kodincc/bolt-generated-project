import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useStore } from '../store';

function IncidentMarkers() {
  const { incidents, showIncidents } = useStore();

  if (!showIncidents) return null;

  return incidents.map(incident => (
    <Marker
      key={incident.id}
      position={[incident.lat, incident.lng]}
    >
      <Popup>
        <h3>{incident.name}</h3>
        <p>Status: {incident.status}</p>
        <p>Type: {incident.type}</p>
      </Popup>
    </Marker>
  ));
}

export default IncidentMarkers;
