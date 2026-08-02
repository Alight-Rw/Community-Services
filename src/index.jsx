import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './Assets/styles/index.css'
import { Routers } from "./Routers"
import { ThemeProvider } from './Context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Routers />
    </ThemeProvider>
  </StrictMode>
)
