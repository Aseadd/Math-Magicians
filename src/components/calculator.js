import React from 'react';
import './styles.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="item1">
          <p className="result">0</p>
        </div>
        <div className="item">AC</div>
        <div className="item">+/-</div>
        <div className="item">%</div>
        <div className="item2">÷</div>
        <div className="item">7</div>
        <div className="item">8</div>
        <div className="item">9</div>
        <div className="item2">X</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item2">-</div>
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item2">+</div>
        <div className="item18">0</div>
        <div className="item">.</div>
        <div className="item2">=</div>
      </div>
    );
  }
}
export default Calculator;
