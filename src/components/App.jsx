import React from 'react';
import Router from './Router';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
