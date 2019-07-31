import React from 'react';
import ScoopHeader from './components/header';
import ScoopCarousel from './components/scoopCarousel';
import ChatButton from './components/chatButton';
import ScoopFooter from './components/scoopFooter';
import ChatBot from './components/chatBotTest';


function App() {

  

  return (
    <div>
      <ScoopHeader />
      <ScoopCarousel />
      <ChatButton />
      <ScoopFooter />
      <ChatBot />
    </div>
  );
}

export default App;
