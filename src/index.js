import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [contador, setContador] = React.useState(
    0
  );

  const altereContador = operacao =>
    setContador(c => operacao(c));

  return (
    <div>
      <button
        onClick={() => setContador(c => c + 1)}
      >
        adiciona
      </button>
      <div
        onMouseEnter={() =>
          altereContador(c => c - 1)
        }
        style={{
          backgroundColor: 'red',
          width: 50,
          height: 50,
          marginTop: 10
        }}
      >
        subtrai
      </div>
      <h1>{contador}</h1>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
