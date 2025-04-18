import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Box } from './Box.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Box />
    </StrictMode>,
)
