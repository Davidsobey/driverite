import 'babel-polyfill'; // Needed for redux-saga es6 generator support

// Import all the third party libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import createHistory from 'history/createBrowserHistory';
import { MuiThemeProvider } from 'material-ui/styles';
import { CookiesProvider } from 'react-cookie';
import 'sanitize.css/sanitize.css';

// Import root app
import App from '../app/containers/App';

// Import CSS reset and Global Styles
import '../app/styles/global-styles';
import '../app/styles/material-dashboard-react.css';
import muiTheme from '../app/styles/material-theme';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable */
// import '!file-loader?name=[name].[ext]!./images/favicons/favicon.ico';
// import '!file-loader?name=[name].[ext]!./images/favicons/favicon-16x16.png';
// import '!file-loader?name=[name].[ext]!./images/favicons/favicon-32x32.png';
// import '!file-loader?name=[name].[ext]!./images/favicons/mstile-150x150.png';
// import '!file-loader?name=[name].[ext]!./images/favicons/safari-pinned-tab.svg';
// import '!file-loader?name=[name].[ext]!./images/favicons/android-chrome-192x192.png';
// import '!file-loader?name=[name].[ext]!./images/favicons/android-chrome-512x512.png';
// import '!file-loader?name=[name].[ext]!./images/favicons/apple-touch-icon.png';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable */

// Configure redux store
import configureStore from './configureStore';

import { loadDispatcher } from './utils/request';

const roboto = new FontFaceObserver('Roboto');

roboto.load().then(() => {
  document.documentElement.className += ' fonts-loaded';
});

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

loadDispatcher(store.dispatch);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CookiesProvider>
          <MuiThemeProvider theme={muiTheme}>
            <App />
          </MuiThemeProvider>
        </CookiesProvider>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  });
}

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line
}
