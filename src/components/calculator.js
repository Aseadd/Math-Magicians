import React from 'react';
import './styles.css';
import calculate from '../logic/calculate';

const btns = [
  { value: 'AC', className: 'item' },
  { value: '+/-', className: 'item' },
  { value: '%', className: 'item' },
  { value: '÷', className: 'item2' },
  { value: '7', className: 'item' },
  { value: '8', className: 'item' },
  { value: '9', className: 'item' },
  { value: 'x', className: 'item2' },
  { value: '4', className: 'item' },
  { value: '5', className: 'item' },
  { value: '6', className: 'item' },
  { value: '-', className: 'item2' },
  { value: '1', className: 'item' },
  { value: '2', className: 'item' },
  { value: '3', className: 'item' },
  { value: '+', className: 'item2' },
  { value: '0', className: 'item18' },
  { value: '.', className: 'item' },
  { value: '=', className: 'item2' },
];

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickHandler = (event) => {
    this.setState((prevState) => calculate(prevState, event.target.value));
  };

  formatOutput = () => {
    const { total, next, operation } = this.state;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  render() {
    return (
      <div className="grid-container">
        <div className="item1">
          <p className="result">{this.formatOutput()}</p>
        </div>

        {btns.map(({ value, className }) => (
          <button
            type="button"
            className={className}
            value={value}
            key={value}
            onClick={this.onClickHandler}
          >
            {value}
          </button>
        ))}
      </div>
    );
  }
}
export default Calculator;
