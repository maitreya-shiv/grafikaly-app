import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SidebarComponent from "./components/SidebarComponent";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router";


const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // Your desired styles for the MuiTypography-root class
          fontFamily: 'monospace',
          //color: 'black',
          // Add any other CSS properties you want to override
        },
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="app-container">
          <SidebarComponent />
          <App />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
