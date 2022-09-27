import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div>
      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
