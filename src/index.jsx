import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import { Routers } from "./Routers"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers />
  </StrictMode>
)
