import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import './index.css'
import { TipCalculateApp } from './TipCalculateApp'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TipCalculateApp />
  </StrictMode>,
)
