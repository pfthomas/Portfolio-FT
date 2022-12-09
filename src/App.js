// import logo from './logo.svg';\
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Header, Footer, PageTitle, About, Home, Portfolio } from './components/common'

//switch = routes


function App() {
  return (
    <div className="App">
      <Header/>
          <Routes>
            <Route path="/" 
            element={<Home/>}>
            </Route>

            <Route path="/Portfolio-FT/about" 
            element={<About/>}>
            </Route>
            <Route path ="/Portfolio-FT/portfolio"
              element={<Portfolio/>}>
            </Route>
            <Route path="/Portfolio-FT/contact">
              {/* <PageTitle title="contact"/> */}
            </Route>
            <Route path="/Portfolio-FT/resume">
              {/* <PageTitle title="resume"/> */}
            </Route>
          </Routes>
      <Footer/>
    </div>
  );
}
export default App;
