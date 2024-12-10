import React, { useEffect, useState } from 'react';

const SavedMemes = () => {
    const [savedMemes, setSavedMemes] = useState([]);

    useEffect(() => {
        // Fetch memes from local storage
        const memes = JSON.parse(localStorage.getItem('meme')) || [];
        setSavedMemes(memes);
    }, []);

    return (
        <div className="saved-memes-container">
            {savedMemes.length > 0 ? (
                <div className="flex-container">
                    {savedMemes.map((meme, index) => (
                        <div key={index} className="meme-box">
                            <img src={meme} alt={`Meme ${index + 1}`} className="meme-image" />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="">
                    <h1 className='text-3xl text-green-500 font-bold text-center pt-20'>You Suck!</h1>
                    <p className="text-green-500 text-center pt-40">No saved memes found.</p>

                </div>
            )}
        </div>
    );
};

export default SavedMemes;