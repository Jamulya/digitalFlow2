import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import './scss/style.scss'
import React, {useState} from 'react'
import Questions from "./components/Questions/Questions";




function App() {

  
  return (
    <>
  
     {/* <Header/> */}
     <main>
      <Services/>
      <Questions/>
     </main>
     {/* <Footer/> */}
    </>
  );
}

export default App;
