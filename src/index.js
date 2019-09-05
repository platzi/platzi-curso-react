import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Oi = props => (
  <h1
    style={{
      backgroundColor: 'limegreen'
    }}
  >
    Oi {props.nome}
  </h1>
);

class Tchau extends React.Component {
  render() {
    return (
      <h3 className="platzi">
        Tchau {this.props.nome}
      </h3>
    );
  }
}

const nome = 'Luís';
const nome2 = 'Maria';

ReactDOM.render(
  <div>
    <Oi nome={nome} />
    <Tchau nome={nome} />
    <Oi nome={nome2} />
    <Tchau nome={nome2} />
  </div>,
  document.getElementById('root')
);
