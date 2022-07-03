import React, { useState, useEffect } from 'react';

// import Header from "./components/Header/Header";
import MyInformations from "./components/MyInformations/MyInformations";
// import CardList from "./components/CardList/CardList";
import MenuSelection from './components/MenuSelection/MenuSelection'
function App() {
  return (
    <div >
      {/* <Header /> */}
      <MenuSelection />
      <div className="my-informations">
        <MyInformations name="Ítalo Alves" github="https://github.com/italoa7x"
          instagram="https://instagram.com/italo_a1"
        />
      </div>
    </div>
  );
}

export default App;
