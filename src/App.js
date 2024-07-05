import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import themeSettings from "./theme";
import useScrollToTop from "./hooks/useScrollToTop.js";
import Home from "./pages/home/index.js";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTopWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </ScrollToTopWrapper>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const ScrollToTopWrapper = ({ children }) => {
  useScrollToTop();
  return <>{children}</>;
};

export default App;
