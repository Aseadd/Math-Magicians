import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch(
        'https://random-math-quote-api.herokuapp.com/',
      );
      const data = await response.json();
      setQuote(data);
    };
    fetchQuotes();
  }, []);
  return (
    <div className="quotes">
      <p className="quote">
        {quote.quote}
        &nbsp;
        <strong>{quote.author}</strong>
      </p>
    </div>
  );
};

export default Quotes;
