import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from "react-transition-group";

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: #000;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127,224,237);
  margin-top: 1rem;
  position: relative;
`;

const TextoCotizacion = styled.p`
  color:#00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Resultado = ({cotizacion}) => {
    return cotizacion === 0
        ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
        : (
            <ResultadoCotizacion>
                <TransitionGroup className="resultado">
                    <CSSTransition className="resultado" key={cotizacion} timeout={{enter: 500, exit: 500}}>
                        <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>)
};

Resultado.propTypes = {
    cotizacion: PropTypes.string.isRequired
}

export default Resultado;
