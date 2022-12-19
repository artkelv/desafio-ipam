import React from 'react';
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
    </div>
  );
}

export default App;
