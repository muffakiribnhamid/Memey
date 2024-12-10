import React, { useState } from 'react';
import Navbar from './Navbar';
import Button from './Button';
import MemeContainer from './MemeContainer';
import SavedMemes from './SavedMemes';

const MainScreen = () => {
    const [mainScreen, setmainScreen] = useState(true);
    const [showSavedMemes, setShowSavedMemes] = useState(false);

    return (
        <div className=''>
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
                    <img src="mainicon.png" width={300} alt="Main Img" className='mx-auto' />
                    <div className="flex justify-center">
                        <Button onClick={() => { setmainScreen(false); }} />;
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