import React, { useState } from 'react';
import Footer from "./footer"
import Header from "./header"
import { GlobalStyle, Content } from "./app.styled"

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Content >
        <p>
          Rafa eres un mariquita
        </p>
      </Content >
      <Footer />
    </div>
  );
}

export default App;
