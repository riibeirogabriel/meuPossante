import { createStore } from 'redux';

import reducers from './modules';

export const store = createStore(reducers);
