import React from "react";
import classnames from "classnames";
import './Card.css'
import CaraTras from '../../imagenes/CaraTras.png'



const Card = ({ onClick, carta, id, Activo, Volteado, Deshabilitado }) => (
      <div
        className={classnames("carta", {
          "Volteado": Volteado,
          "Activo": Activo
        })}
        onClick={() => {!Volteado && !Deshabilitado && onClick(id)}}
      >
        <div className="cara trasera">
          <img src={CaraTras} alt="CaraTras" />
        </div>
        <div className="cara frontal">
          <img src={carta.image} alt="CaraFrontal" />
        </div>
      </div>
    );

  export default Card;

