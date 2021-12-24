import React from 'react';
import About from "./components/About";
import Footer from './components/Footer';
import Header from "./components/Header";
import Projects from './components/Projects';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <main className="content__wrapper">
        <About/>
        <Projects/>
        <Footer/>
      </main>
    </React.Fragment>
  );
}

export default App;
