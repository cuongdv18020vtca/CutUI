import React from 'react';

import './App.css';
import Section1 from './components/section1/section1';

import ContentSection2 from './components/section2/contentSection2'
import ElementContent from './components/elementArena/elementContent';
import ContentSection3 from './components/section3/contentSection3'
import ContentSection4 from './components/section4/contentSection4'
import ContentSection5 from './components/section5/contentSection5'
import ContentSection6 from './components/section6/contentSection6'
import ContentSection7 from './components/section7/contentSection7'
import ContentSection8 from './components/section8/contentSection8'
import ContentSection9 from './components/section9/contentSection9'

function App() {
  return (
    <React.Fragment>
      <Section1 />
      <ElementContent />
      <ContentSection2 />
      <ContentSection3 />
      <ContentSection4 />
      <ContentSection5 />
      <ContentSection6 />
      <ContentSection7 />
      <ContentSection8 />
      <ContentSection9 />
    </React.Fragment>
  );
}

export default App;
