import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';

class App extends Component {
   constructor(){
      super();
      this.configureHeader = {
          companyName:'All State'
      }
      this.configureFooter ={
        footerData:["About us", 
        "Contact Us", "Site Map",
        "All State Blog",
        "Careers",
        "All State Investments"]
      }
   }
  render() {
    return (
      <div className="App">
        <NavBar  title={this.configureHeader.companyName} />
        <Footer  
        footerItems =
         {this.configureFooter.footerData}
          />
      </div>
     
    );
  }
}

export default App;
