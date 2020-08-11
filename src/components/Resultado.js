import styled from '@emotion/styled';
import React from 'react';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: #000;
`;

const Resultado = ({ cotizacion }) => {
    return cotizacion === 0 ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> : cotizacion;
};

export default Resultado;
