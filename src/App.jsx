import { useState } from 'react'
import Header from './Components/Header/Header'
import Middle from './Components/Middle/Middle'
import Hero from "./Components/Hero/Hero";
import Footer from './Components/Footer/Footer';
import './styles/_global.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Middle />
      <Hero />
      <Footer />
    </>
  );
}

export default App
