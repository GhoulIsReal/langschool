import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import StaffCardsHolder from './components/StaffCardsHolder/StaffCardsHolder';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import SeasonCardHolder from './components/SeasonCardHolder/SeasonCardHolder';
import Form from './components/Form/Form';
import SideBarCaller from './components/SideBarCaller/SideBarCaller';
import SideBar from './components/SideBar/SideBar';
import SeasonsDiv from './components/SeasonsDiv/SeasonsDiv';
import StaffCardsDiv from './components/StaffCardsDiv/StaffCardsDiv';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <SideBarCaller />
        <SideBar />
        <Banner />
        <SeasonsDiv />
        <SeasonCardHolder />
        <About />
        <StaffCardsDiv />
        <StaffCardsHolder />
        <Form />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
