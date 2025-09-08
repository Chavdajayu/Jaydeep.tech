import { useState } from 'react'
import './App.css'
// import Hero from "./components/Hero";
import FirstPage from './components/FirstPage';
import GateAnimation from './components/GateAnimation';

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Handle animation completion
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
      {/* Always show the main content */}
      <FirstPage />
      
      {/* Show gate animation as an overlay */}
      <GateAnimation onAnimationComplete={handleAnimationComplete} />
    </>
  )
}

export default App
