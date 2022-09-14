import React from 'react';
import './App.css';
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <section>
        <h1>Home Page</h1>
        <Calculator />
      </section>
    );
  }
}

export default App;
