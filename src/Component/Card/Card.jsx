import React from "react";
import './Card.css'
import CaraTras from '../../assets/imagenes/CaraTras.png'



const Card = () => {
    return (
        <div >
            <img className="Carta" src={CaraTras} alt="Cara Trasera" />
        </div>
    )
}

export default Card


