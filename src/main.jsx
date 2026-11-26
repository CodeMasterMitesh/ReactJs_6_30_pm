import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { ContextProvider } from './hooks/UseContextHook.jsx';
import "./Redux/Store.jsx"
import { Provider } from 'react-redux';
import { store } from './Redux/Store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ContextProvider> */}
      <Provider store={store}>
          <App />
      </Provider>

    {/* </ContextProvider> */}
  </StrictMode>,
)
