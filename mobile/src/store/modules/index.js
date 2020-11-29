import { combineReducers } from 'redux';

import user from './user/reducers';
import car from './car/reducers';

export default combineReducers({ user, car });
