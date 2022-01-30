import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Components/Google-keep/NotesStyle.css";
import "./index.css";
import Header from './Header';
import MainNote from './Components/Google-keep/MainNote';
import Footer from './Footer';

const App = () => {
  return(
    <>
      <Header/>
      <MainNote/>
      <Footer/>
    </>
  )
}

export default App;