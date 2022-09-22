import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { RootStore } from './Store/RootStore';
import { createContext } from 'react';

export const Context = createContext<RootStore>({} as RootStore);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={new RootStore()}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
