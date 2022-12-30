import React from 'react';
import { Footer } from './components/footer/Footer';
import { FormIpam } from './components/formIpam/FormIpam';
import Header from './components/header/Header';
import MyInfo from './components/myInfo/MyInfo';
import ShowData from './components/showData/ShowData';
import { BoxMain } from "./styles/globalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <BoxMain>
        <FormIpam />
        <MyInfo />
        {/* <ShowData/> */}
      </BoxMain>
      <Footer />
    </div>
  );
}

export default App;
