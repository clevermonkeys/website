import React from 'react';
import { render } from 'react-snapshot';
import 'normalize.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(<App />, document.getElementById('root'));
registerServiceWorker();
