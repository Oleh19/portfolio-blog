import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { persistedStore, store } from './store/store';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistedStore}
        >
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
