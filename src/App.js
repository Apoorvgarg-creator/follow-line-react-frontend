import './App.css';
import ProminentAppBar from "./components/nav-bar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from "react";
import ACE_EDITOR from "./components/aceEditor";


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffac15',
    },
    secondary: {
      main: '#147aff',
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <ProminentAppBar/>
            <ACE_EDITOR/>
        </div>
      </ThemeProvider>
  );
}

export default App;
