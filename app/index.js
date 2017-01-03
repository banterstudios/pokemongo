/* React */
import React from 'react';
import ReactDOM from 'react-dom';

/* Routes */
import routes from './config/routes';

/* Styles */
import './styles/index.scss';

/* dev */
window.dev = true;

/* Render */
ReactDOM.render(routes, document.getElementById('app'));