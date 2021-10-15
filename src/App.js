import React from 'react';
//Global Style
import GlobalStyle from '../src/components/GlobalStyle'
//Import pages
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs/>
    </div>
  );
}

export default App;
