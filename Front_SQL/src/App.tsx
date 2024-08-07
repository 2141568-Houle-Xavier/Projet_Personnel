import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {  createTheme, ThemeProvider } from "@mui/material";

import Table from './components/Dashboard/table.component'
import Topbar from './components/Drawers/topbar.component'
import Accueil from './components/Dashboard/accueil.component';
import Entree from './components/Dashboard/entree.component';
import Console from './components/Dashboard/console.component';

const darkTheme = createTheme({
  palette: {
    mode: "light",
    
    background: {
      default: "#eaeaea"
    }
  },
})

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Topbar/>}>
            <Route index element={<Accueil/>} />
            <Route path="/:nom_bd" element= {<Table/>} />
            <Route path="/:nom_bd/:nom_table" element= {<Entree/>} />

            <Route path="/console" element={<Console />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
