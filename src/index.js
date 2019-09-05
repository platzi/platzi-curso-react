import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Usuario = props => {
  return (
    <div>
      {props.id} - {props.nome} - {props.tipo}
    </div>
  );
};
Usuario.propTypes = {
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(['admin', 'normal'])
    .isRequired
};

ReactDOM.render(
  <Usuario id={1} nome="Luís" tipo="admin" />,
  document.getElementById('root')
);
