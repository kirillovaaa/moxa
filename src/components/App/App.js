import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Ribbon from "../Ribbon/Ribbon";
import Description from "../Description/Description";
import Awards from "../Awards/Awards";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Customer from "../Customer/Customer";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";

// import Footer from "../Footer/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <Promo />
      <Ribbon />
      <Description />
      <Awards />
      <Portfolio />
      <Services />
      <Customer />
      <Articles />
      <Footer />
    </main>
  );
};

export default App;
