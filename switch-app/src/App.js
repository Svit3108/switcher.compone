import React from 'react';
import { ThemeProvider } from './contexts/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
