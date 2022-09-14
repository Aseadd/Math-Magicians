import React, { useState } from 'react';
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

const Calculator = () => {
  const [items, setItems] = useState(0);

  const onClickHandler = (event) => {
    setItems((prevState) => calculate(prevState, event.target.value));
  };

  const formatOutput = () => {
    const { total, next, operation } = items;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  return (
    <section className="calc">
      <span>Lets do some Math</span>
      <div className="container">
        <div className="grid-container">
          <div className="item1">
            <p className="result">{formatOutput()}</p>
          </div>

          {btns.map(({ value, className }) => (
            <button
              type="button"
              className={className}
              value={value}
              key={value}
              onClick={onClickHandler}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
