import { create } from 'zustand';

const mockIncidents = [
  {
    id: 1,
    name: 'Wildfire Alpha',
    type: 'Wildfire',
    status: 'Active',
    lat: 40.7128,
    lng: -74.0060
  },
  {
    id: 2,
    name: 'Hurricane Beta',
    type: 'Hurricane',
    status: 'Monitoring',
    lat: 25.7617,
    lng: -80.1918
  }
];

export const useStore = create((set) => ({
  incidents: mockIncidents,
  showIncidents: true,
  activeLayers: ['weather'],
  
  toggleIncidentVisibility: () => 
    set(state => ({ showIncidents: !state.showIncidents })),
  
  toggleLayer: (layerId) =>
    set(state => ({
      activeLayers: state.activeLayers.includes(layerId)
        ? state.activeLayers.filter(id => id !== layerId)
        : [...state.activeLayers, layerId]
    })),
}));
