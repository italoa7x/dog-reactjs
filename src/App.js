import React from 'react';

import Header from "./components/header/Header";
import Cards from "./components/card/Cards";
import MyInformations from "./components/MyInformations/MyInformations";

function App() {
  return (
    <div>
     <Header />
     <Cards />
     <div className="my-informations">
       <MyInformations name="Ítalo Alves" github="https://github.com/italoa7x" 
       instagram="https://instagram.com/italo_a1"
       />
     </div>
    </div>
  );
}

export default App;
