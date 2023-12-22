import React, { useEffect, useState } from 'react';
import './App.css';
import GifPlayer from 'react-gif-player';
import presentGif from './present.gif';
import Santa from './merry-christmas.gif';
import Content from './content.png';
import Cross from './cross.svg';
import merry from './pixel-merry.png';

function App() {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: document.getElementById("present").offsetTop,
        behavior: "smooth"
      });
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    const delayTimer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3100);
  }

  const turnOffModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <div className='block'>
        <GifPlayer className="santa" gif={Santa} autoplay={true} />
      </div>
      <div className='block present-back' id='present' onClick={toggleModal}>
        <GifPlayer className="present" gif={presentGif} autoplay={false} />
      </div>

      {isModalOpen && (
        <div className="modal-overlay" style={{ display: isModalOpen ? 'flex' : 'none' }}>
          <div className="modal-content">
            <img className='cross' onClick={turnOffModal} src={Cross} alt="cross" />
            <img className='merry' src={merry} alt="merry" />
            <img className='content' src={Content} alt="content" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
