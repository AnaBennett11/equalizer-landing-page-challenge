import { useState } from 'react'
import Header from './Components/Header/Header'
import Middle from './Components/Middle/Middle'
import Hero from "./Components/Hero/Hero";
import './styles/_global.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Middle />
     <Hero />
    </>
  )
}

export default App
