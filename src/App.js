import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Reserve from "./components/Reserve";
import { AlertProvider } from "./context/alertContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Router> {/* Wrap your app in Router */}
          <main>
            <Header />
            <Routes>
            <Route
              path="/"
              element={
                <>
                  <Section1 />
                  <CardsSection />
                </>
              }
            />
            <Route path="/reserve" element={<Reserve />} /> {/* Define route for Section1 */}
            </Routes>
            <Footer />
          </main>
        </Router>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
