import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import theme from './styles/theme'
import  { Details } from './pages/Details/index.jsx'
import  { Home } from './pages/Home/index.jsx'
import  { Sigin } from './pages/Sigin/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Sigin />
    </ThemeProvider>
  </React.StrictMode>
)
