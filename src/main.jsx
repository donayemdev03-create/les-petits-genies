import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// HashRouter : fonctionne sur n'importe quel hébergement statique sans configuration serveur.
// Pour des URL « propres » (/services au lieu de /#/services), utilisez BrowserRouter
// et configurez la réécriture des URL côté serveur.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
