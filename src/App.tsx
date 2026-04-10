import { useCallback, useState } from "react";
import "./styles/main.scss";

import LoadingScreen from "./components/common/LoadingScreen";
import HomePage2 from "./pages/homes/index-02";
import { ModalUIProvider } from "./context/ModalUIContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LanguageProvider>
      <ModalUIProvider>
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
        <div
          className={`app-content-shell ${
            loading ? "app-content-shell--hidden" : "app-content-shell--visible"
          }`}
        >
          <HomePage2 />
        </div>
      </ModalUIProvider>
    </LanguageProvider>
  );
}

export default App;
