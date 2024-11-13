import React from 'react';
import { useStore } from '../store';

function ControlPanel() {
  const { incidents, toggleIncidentVisibility } = useStore();

  return (
    <div className="control-panel">
      <h3>Tactical Controls</h3>
      <div>
        <button onClick={() => toggleIncidentVisibility()}>
          Toggle Incidents
        </button>
      </div>
    </div>
  );
}

export default ControlPanel;
