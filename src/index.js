import React from 'react';
import ReactDOM from 'react-dom';

const COTACAO = 4;
const convertaDolarEmReal = dolar =>
  dolar * COTACAO;
const convertaRealEmDolar = real =>
  real / COTACAO;

const InputDeValor = ({
  moeda,
  valor,
  onChange
}) => {
  return (
    <div>
      <label>{moeda}</label>
      <input
        type="number"
        value={valor || ''}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

const App = props => {
  const [
    valorEmDolar,
    setValorEmDolar
  ] = React.useState();
  return (
    <div>
      <InputDeValor
        moeda="R$"
        valor={convertaDolarEmReal(valorEmDolar)}
        onChange={v =>
          setValorEmDolar(convertaRealEmDolar(v))
        }
      />
      <InputDeValor
        moeda="US$"
        valor={valorEmDolar}
        onChange={v => setValorEmDolar(v)}
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
