import React from 'react';
import './App.css';
import Header from './components/header';
import Calculator from './components/calculator';
import Footer from './components/footer';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Calculator />
        <Footer />
      </section>
    );
  }
}

export default App;
