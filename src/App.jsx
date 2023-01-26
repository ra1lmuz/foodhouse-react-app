import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Menu />
    </>
  )
}

export default App;