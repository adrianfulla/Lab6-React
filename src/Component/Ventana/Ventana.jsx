import React from 'react';
import PropTypes from 'prop-types';

import './Ventana.css';

const Ventana = ({ children, customClass, show, closeCallback }) => (
  <div className={`Ventana ${customClass}`} style={{ display: show ? 'block' : 'none'}}>
    <div className="contenedor" onClick={closeCallback}></div>
    <div className="contenido">
      {children}
      <button title="Close" className="close_modal" onClick={closeCallback}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
);

Ventana.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func,
};



export default Ventana;