import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import App from 'components/App';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './styles/index.css';
import Loader from 'components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
        </HashRouter>
    </Provider>
  </React.StrictMode>,
);


