import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CaraTras from './assets/imagenes/CaraTras.png'
import Cara1 from './assets/imagenes/Cara1.png'
import Cara2 from './assets/imagenes/Cara2.png'
import Cara3 from './assets/imagenes/Cara3.png'
import Cara4 from './assets/imagenes/Cara4.png'
import Cara5 from './assets/imagenes/Cara5.png'
import Cara6 from './assets/imagenes/Cara6.png'
import Cara7 from './assets/imagenes/Cara7.png'
import Cara8 from './assets/imagenes/Cara8.png'
import Card from './Component/Card/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JUEGO DE MEMORIA</h1>
      <div className='Grid'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='Contador'>
        <h3>Contador</h3>
        <h4>4</h4>
      </div>
      <button className='Reset'>Reiniciar</button>
    </>
  )
}

export default App
