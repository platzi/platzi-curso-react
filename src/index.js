import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Resultado extends React.Component {
  render() {
    return <h1>{this.props.resultado}</h1>;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      prevProps.resultado,
      this.props.resultado
    );
  }
}

class Contador extends React.Component {
  state = {
    valor: 0
  };
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(s => ({
        valor: s.valor + 1
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <Resultado resultado={this.state.valor} />
      </div>
    );
  }
}
class App extends React.Component {
  state = {
    mostrarContador: true
  };
  toggleMostrador = () => {
    this.setState(s => ({
      mostrarContador: !s.mostrarContador
    }));
  };
  render() {
    if (!this.state.mostrarContador) {
      return (
        <div>
          <input
            type="checkbox"
            checked={this.state.mostrarContador}
            onChange={this.toggleMostrador}
          />
        </div>
      );
    }
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.mostrarContador}
          onChange={this.toggleMostrador}
        />
        <Contador />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
