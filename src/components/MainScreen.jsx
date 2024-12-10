import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Button from './Button';
import MemeContainer from './MemeContainer';
import SavedMemes from './SavedMemes';

const MainScreen = () => {
    const [mainScreen, setmainScreen] = useState(true);
    const [showSavedMemes, setShowSavedMemes] = useState(false);

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const moveCursor = (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };
        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className=''>
            <style>
              {`
                #custom-cursor {
                  position: fixed;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  border: 2px solid white; /* White border */
                  background-color: transparent; /* No fill */
                  pointer-events: none;
                  transition: transform 0.1s ease;
                  z-index: 9999;
                }
              `}
            </style>
            <div id="custom-cursor"></div>
            <div className='terminal-header'>
                <div className='dot red'></div>
                <div className='dot yellow'></div>
                <div className='dot green'></div>
            </div>
            <Navbar setHomeScreen={setmainScreen} setShowSavedMemes={setShowSavedMemes} />

            {showSavedMemes ? (
                <div>
                    <SavedMemes />
                </div>
            ) : mainScreen ? (
                <div className="text-center welcome mt-20">
                    <h3 className='text-xl text-green-500 font-bold typewriter'>Lets generate some memes!</h3>
                    <img src="mainicon.png" width={300} alt="Main Img" className='mx-auto hover:rotate-180 transition-all cursor-pointer' />
                    <div className="flex justify-center">
                        <Button onClick={() => { setmainScreen(false) }} />
                    </div>
                </div>
            ) : (
                <div>
                    <MemeContainer />
                </div>
            )}
        </div>
    );
}

export default MainScreen;