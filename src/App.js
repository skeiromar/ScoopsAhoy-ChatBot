import React from 'react';
import ScoopHeader from './components/header';
import ScoopCarousel from './components/scoopCarousel';
import ScoopFooter from './components/scoopFooter';
import ChatBot from './components/chatBot';
import ChatModal from './components/chatModal';


function App() {


  return (
    <div>
      <ScoopHeader />
      <ScoopCarousel />
      <ChatModal />
      <ScoopFooter />
    </div>
  );
}

export default App;
