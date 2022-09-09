import React, { useState, useEffect } from 'react';
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
  const [quote, setQuote] = useState('');

  const onClickHandler = (event) => {
    setItems((prevState) => calculate(prevState, event.target.value));
  };

  const formatOutput = () => {
    const { total, next, operation } = items;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch(
        'https://random-math-quote-api.herokuapp.com/',
      );
      const data = await response.json();
      // const parseData = JSON.parse(data);
      setQuote(data);
      // console.log(data.quote);
    };
    fetchQuotes();
  }, []);
  // console.log(quote.quote);
  return (
    <div className="container">
      <p className="quote">
        {quote.quote}
        &nbsp;
        <strong>{quote.author}</strong>
      </p>
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
  );
};

export default Calculator;
