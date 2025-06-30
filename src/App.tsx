import { useEffect, useState } from "react";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import GlobalStyles from "./theme";

import theme from "./theme/theme";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {!isLoading && (
        <>
          <Routes />
          <GlobalStyles />
          <Toaster position="top-right" />
        </>
      )}
      {isLoading && (
        <div id="loader" className="loader">
          <div id="loaderContent" className="loader__content">
            <div className="loader__shadow"></div>
            <div className="loader__box"></div>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
