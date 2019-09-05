import React from 'react';
import ReactDOM from 'react-dom';

const pessoas = [
  {
    id: 1,
    nome: 'Luís'
  },
  {
    id: 2,
    nome: 'Luís'
  },
  {
    id: 3,
    nome: 'Maria'
  },
  {
    id: 4,
    nome: 'José'
  }
];

const Pessoa = p => (
  <li>
    <strong>{p.id}</strong> - {p.nome}
  </li>
);

const App = () => (
  <ul>
    {pessoas.map(p => (
      <Pessoa
        key={p.id.toString()}
        id={p.id}
        nome={p.nome}
      />
    ))}
  </ul>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
