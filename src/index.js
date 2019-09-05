import React from 'react';
import ReactDOM from 'react-dom';

const focaNoElemento = elementoHtmlDeVerdade =>
  elementoHtmlDeVerdade.focus();

const App = props => {
  const input1 = React.useRef(null);
  const input2 = React.useRef(null);

  return (
    <div>
      <button
        onClick={() =>
          focaNoElemento(input1.current)
        }
      >
        Foco no 1
      </button>
      <button
        onClick={() =>
          focaNoElemento(input2.current)
        }
      >
        Foco no 2
      </button>
      <input type="text" ref={input1} />
      <input type="text" ref={input2} />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
