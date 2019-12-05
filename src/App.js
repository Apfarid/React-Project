import React from 'react';
import Header from './components/header/Header'

function App() {
  let menu = [
    {nombre:'Canasta', icon: 'fa-shopping-basket'},
    {nombre:'Salir'}
  ]
  return (
    <Header
    menu = {menu}
    />
  );
}

export default App;
