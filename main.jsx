import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { Form } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {  <App /> }
   
 
  </StrictMode>,
)
