import { useState } from 'react'
import Header from './Components/Header/Header'
import Middle from './Components/Middle/Middle'
import './styles/_global.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Middle />
    </>
  )
}

export default App
