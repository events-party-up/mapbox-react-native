import { call, put } from 'redux-saga/effects';
import GitHubAPI from '../../services/github';
import MapboxAPI from '../../services/mapbox';

import { addUserSuccess, changeLocal } from '../actions';

export function* addUserRequest(action) {
  const response = yield call(GitHubAPI.get, `/users/${action.payload.userName}`);
  const result = yield call(MapboxAPI.get, `${response.data.location}.json`);

  const { features } = result.data;
  const { coordinates } = features[0].geometry;
  const latLng = {
    lat: coordinates[1],
    lng: coordinates[0],
  };

  Object.assign(response.data, latLng);

  yield put(addUserSuccess(response.data));
  yield put(changeLocal(latLng));
}
