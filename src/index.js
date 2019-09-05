import React from 'react';
import ReactDOM from 'react-dom';

const elemento = React.createElement(
  'div',
  {},
  React.createElement(
    'h1',
    {},
    'Olá Platzi MAIOOOOOOR!'
  )
);

ReactDOM.render(
  elemento,
  document.getElementById('root')
);
