// App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
       <Helmet>
        <title>Vijay Narendran V | Portfolio</title>
        <meta name="description" content="Full Stack Developer and Data Analyst Portfolio" />
      </Helmet>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;