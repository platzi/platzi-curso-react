import React from 'react';
import ReactDOM from 'react-dom';

const IdiomaContext = React.createContext();

const Ola = () => {
  const ctx = React.useContext(IdiomaContext);
  return (
    <h1>
      {ctx.idioma === 'pt-BR' ? 'Olá' : 'Hello'}
    </h1>
  );
};
const MudaIdioma = () => {
  const ctx = React.useContext(IdiomaContext);
  return (
    <div>
      <button
        onClick={() => ctx.setIdioma('pt-BR')}
      >
        português
      </button>
      <button onClick={() => ctx.setIdioma('en')}>
        inglês
      </button>
    </div>
  );
};
const App = props => {
  const [idioma, setIdioma] = React.useState(
    'pt-BR'
  );
  return (
    <IdiomaContext.Provider
      value={{ idioma, setIdioma }}
    >
      <div>
        <Ola />
        <MudaIdioma />
      </div>
    </IdiomaContext.Provider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
