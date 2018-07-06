import React from 'react';
import Router from './Router';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <div>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
          }
          body {
            font-family: sans-serif;
            font-weight: 100;
          }
        `}</style>
        <Navbar />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
