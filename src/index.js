import React from 'react';
import ReactDOM from 'react-dom';

const PlatziFuncional = props => {
  const [texto, setTexto] = React.useState('Oi');
  const [pessoa, setPessoa] = React.useState({
    id: 1,
    nome: 'Luís'
  });
  return (
    <div>
      <h3 className="platzi">
        {texto} {props.nome}
      </h3>
      <button
        onClick={() => {
          setTexto(textoAnterior =>
            textoAnterior === 'Oi'
              ? 'Tchau'
              : 'Oi'
          );
        }}
      >
        Mudar estado
      </button>
      <p>
        {pessoa.id} - {pessoa.nome}
      </p>
      <button
        onClick={() => {
          setPessoa(pessoaAnterior => ({
            id: pessoaAnterior.id + 1,
            nome: pessoaAnterior.nome
          }));
        }}
      >
        Mudar estado da pessoa
      </button>
    </div>
  );
};

ReactDOM.render(
  <div>
    <PlatziFuncional nome="Maria" />
  </div>,
  document.getElementById('root')
);
