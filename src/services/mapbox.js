import axios from 'axios';

const MapboxAPI = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 1,
    access_token: 'pk.eyJ1IjoiZmNhcnZhbGhvODgiLCJhIjoiY2pmMDVuNjl3MGlsODJ3bm5tNm5jbHl3eCJ9.WSeVi0NhjDUzAaHrjFrG5A',
  },
});

export default MapboxAPI;
