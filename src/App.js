import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import MainContent from "../components/MainContent"; //MainContent is not a layout HTML5 tag
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
}
export default App;
