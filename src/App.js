import React from 'react';

import './App.css';

import Subscription from './features/subscription/subscription'

import Customer from './features/Customer/customer'
import Header from './features/header/header';
import Characteristic from './features/Characteristic/characteristic';
import Feature from './features/Feature/feature';
import Video from './features/video/video';
import Package from './features/package/package';
import IconFooter from './features/iconFooter/iconFooter';
import Footer from './features/footer/footer';
import Background from './features/background/background';

function App() {
  return (
    <React.Fragment>
      <Background />
      <Header />
      <Characteristic />
      <Subscription />
      <Feature />
      <Video />
      <Package />
      <Customer />
      <IconFooter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
