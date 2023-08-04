import React from 'react';
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css"
import Skypro from "./containers/Skypro";
import { store } from "./store";

const themeLight = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        background: {
            default: "#ffffff"
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
});

function App() {
  return (
      <ThemeProvider theme={themeLight}>
          <CssBaseline />
          <Provider store={store}>
            <Skypro />
          </Provider>
      </ThemeProvider>
  );
}

export default App;
