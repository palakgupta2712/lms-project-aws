import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import theme from "./theme";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
