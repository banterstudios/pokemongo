/* React */
import React from 'react';
import { render } from 'react-dom';

/* Redux */
import { Provider } from 'react-redux';

/* Store */
import store from './store/store';

/* React additional */
import injectTapEventPlugin from 'react-tap-event-plugin';

/* Routes */
import routes from './config/routes';

/* Styles */
import './styles/index.scss';

/* dev */
window.dev = true

/* Initialise teh tap event */
injectTapEventPlugin()

/* Render */
render(
   
   <Provider store={store}>
     {routes}
   </Provider>,

   document.getElementById('app')
)
