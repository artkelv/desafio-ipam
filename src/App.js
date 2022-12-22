import React from 'react';
import { Footer } from './components/footer/Footer';
import { FormIpam } from './components/formIpam/FormIpam';
import Header from './components/header/Header';
import MyInfo from './components/myInfo/MyInfo';
import { TestStyle } from "./styles/globalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <TestStyle>
        <FormIpam />
        <MyInfo />
      </TestStyle>
      <Footer />
    </div>
  );
}

export default App;
