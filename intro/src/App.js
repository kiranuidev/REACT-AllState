import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Counter from './components/counter';
import TextBox from './components/textbox';

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
      };
      this.numbersOnlyRegex =/^\d+$/;
      this.alphabetsOnlyRegex =/^[a-zA-Z]+$/;
   }
  render() {
    return (
      <div className="App container" >
        <NavBar  title={this.configureHeader.companyName} />
         
          <TextBox regex = {this.numbersOnlyRegex}/>
          
          <TextBox regex = {this.alphabetsOnlyRegex}/>
          <Counter />
        <Footer  
        footerItems =
         {this.configureFooter.footerData}
          />
      </div>
     
    );
  }
}

export default App;
