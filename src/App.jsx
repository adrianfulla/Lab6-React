import { useEffect, useState, useRef } from 'react'
import './App.css'
import Cara1 from './imagenes/Cara1.png'
import Cara2 from './imagenes/Cara2.png'
import Cara3 from './imagenes/Cara3.png'
import Cara4 from './imagenes/Cara4.png'
import Cara5 from './imagenes/Cara5.png'
import Cara6 from './imagenes/Cara6.png'
import Cara7 from './imagenes/Cara7.png'
import Cara8 from './imagenes/Cara8.png'
import Card from './Component/Card/Card'
import Ventana from './Component/Ventana/Ventana';


function App() {
  const arrCartas = [
    {
      type : "Cara1",
      image: Cara1
    },
    {
      type : "Cara2",
      image: Cara2
    },
    {
      type : "Cara3",
      image: Cara3
    },
    {
      type : "Cara4",
      image: Cara4
    },
    {
      type : "Cara5",
      image: Cara5
    },
    {
      type : "Cara6",
      image: Cara6
    },
    {
      type : "Cara7",
      image: Cara7
    },
    {
      type : "Cara8",
      image: Cara8
    }
  ]

  const AleatorizarCartas = (array) => {
    const tam = array.length
    for (let i = tam; i > 0; i--) {
      const Index2 = Math.floor(Math.random() * i)
      const Index1 = i - 1
      const temp = array[Index1]
      array[Index1] = array[Index2]
      array[Index2] = temp
    }
    return array
  }

  const [Cartas, setCartas] = useState(AleatorizarCartas.bind(null, arrCartas.concat(arrCartas)))
  const [Abiertas, setAbiertas] = useState([])
  const [Adivinadas, setAdivinadas] = useState({})
  const [Deshabilitar, setDeshabilitar] = useState(false)
  const [Movimientos, setMovimientos] = useState(0)
  const [FinJuego, setFinJuego] = useState(false)

  const timeout = useRef(null)

  const disable = () => {
    setDeshabilitar(true)
  };
  const enable = () => {
    setDeshabilitar(false)
  };

  const checkFinJuego = () => {
    if (Object.keys(Adivinadas).length === arrCartas.length) 
      setFinJuego(true)
  };
  const evaluarCartas = () => {
    const [first, second] = Abiertas
    enable();
    if (Cartas[first].type === Cartas[second].type) {
      setAdivinadas((prev) => ({ ...prev, [Cartas[first].type]: true }))
      setAbiertas([])
      return
    }
    timeout.current = setTimeout(() => {
      setAbiertas([])
    }, 500)
  };
  const handleOnClickCarta = (index) => {
    if (Abiertas.length === 1) {
      setAbiertas((prev) => [...prev, index])
      setMovimientos((Movimientos) => Movimientos + 1)
      disable()
    } else {
      clearTimeout(timeout.current)
      setAbiertas([index])
    }
  }

  useEffect(() => {
    let timeout = null
    if (Abiertas.length === 2) {
      timeout = setTimeout(evaluarCartas, 300)
    }
    return () => {
      clearTimeout(timeout)
    };
  }, [Abiertas])

  useEffect(() => {
    checkFinJuego()
  }, [Adivinadas])


  const checkVolteado = (index) => {
    return Abiertas.includes(index)
  };

  const checkInactivo = (card) => {
    return Boolean(Adivinadas[card.type])
  }

  const handleReinicio = () => {
    setAdivinadas({})
    setAbiertas([])
    setFinJuego(false)
    setMovimientos(0)
    setDeshabilitar(false)

    setCartas(shuffleCartas(arrCartas.concat(arrCartas)))
  };

  
    return (
      <div className="App">
        <h1>JUEGO DE MEMORIA</h1>
      <div className="Grid">
        {Cartas.map((carta, index) => {
          return (
            <Card
              key={index}
              carta={carta}
              id={index}
              Deshabilitado={Deshabilitar}
              Activo={checkInactivo(carta)}
              Volteado={checkVolteado(index)}
              onClick={handleOnClickCarta}
            />
          );
        })}
      </div>
      <div className='PM'>
        <div className="Puntuaje">
          <div className="Movimientos">
            <span>Movimientos:</span> {Movimientos}
          </div>
          
        </div>
        <div className="restart">
          <button onClick={handleReinicio}>
            Reiniciar
          </button>
        </div>
      </div>
      <Ventana
          show={FinJuego}
          customClass="custom_modal_class">
          <div className='Fin'>
            <h2>¡¡¡Felicidades has ganado en {Movimientos} Movimientos!!!</h2>
            <button onClick={handleReinicio} color="primary">
            Restart
          </button>
          </div>
        </Ventana>
        </div>
    )
}

export default App
