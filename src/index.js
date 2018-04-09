import React from 'react';
import { Provider } from 'react-redux';

import 'config/devtools.config';
import 'config/reactotron.config';
import 'config/mapbox.config';

import Store from 'store';
import Main from 'pages/main';

const App = () => (
  <Provider store={Store}>
    <Main />
  </Provider>
);

export default App;
