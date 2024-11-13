import React from 'react';
import { useStore } from '../store';

function LayerControl() {
  const { activeLayers, toggleLayer } = useStore();

  const layers = [
    { id: 'weather', name: 'Weather Layer' },
    { id: 'resources', name: 'Resources' },
    { id: 'fire', name: 'Fire Spread' }
  ];

  return (
    <div className="layer-control">
      <h3>Map Layers</h3>
      {layers.map(layer => (
        <div key={layer.id}>
          <input
            type="checkbox"
            checked={activeLayers.includes(layer.id)}
            onChange={() => toggleLayer(layer.id)}
          />
          <label>{layer.name}</label>
        </div>
      ))}
    </div>
  );
}

export default LayerControl;
