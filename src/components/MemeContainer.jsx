import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { CiBookmark } from "react-icons/ci";
import { MdAutorenew } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaReddit } from "react-icons/fa";
import LoadingText from './LoadingText';
import { toast } from 'react-toastify';
import { addToLocalStorage } from '../../localstorage';

const MemeContainer = () => {
    const [loading, setLoading] = useState(true);
    const [memeImage, setMemeImage] = useState(null);
    const [memeLoading, setMemeLoading] = useState(false); // New loading state for meme generation

    const addtoLocalStorage = () => {
        // Assuming addToLocalStorage is defined in localstorage.js
        addToLocalStorage('meme', memeImage);
        toast.success('Meme saved successfully');
    }

    const generateMeme = () => {
        setMemeLoading(true); // Start loading
        fetch("https://meme-api.com/gimme")
            .then((res) => res.json())
            .then((data) => {
                const randomMeme = data;
                setMemeImage(randomMeme['preview'][3]); // Ensure this index exists
            })
            .catch((error) => {
                console.error("Error fetching meme:", error);
            })
            .finally(() => {
                setMemeLoading(false); // End loading
            });
    }

    useEffect(() => {
        generateMeme(); // Fetch a meme when the component mounts
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className='meme-container'>
            {loading ? (
                <div className="flex justify-center mt-56">
                    <LoadingText />
                </div>
            ) : (
                <div className="terminal-style mt-20 flex flex-col justify-center align-middle">
                    <div className="terminal-dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    {memeLoading ? ( // Show loader while fetching new meme
                        <div className="loading-container">
                            <LoadingText />
                        </div>
                    ) : (
                        <img className='rounded-lg' src={memeImage || 'notfound.png'} alt="Meme" />
                    )}
                    <div className="bar flex justify-between mt-4">
                        <div onClick={addtoLocalStorage} className="save-btn flex items-center gap-2">
                            <p className='text-white'>Save</p>
                            <CiBookmark  color="white" size={15} />
                        </div>
                        <div className="like-btn flex items-center gap-2" onClick={generateMeme}>
                            <p className='text-white'>New Meme</p>
                            <MdAutorenew color="white" size={15} />
                        </div>
                        <div onClick={() => { window.open(memeImage, '_blank') }} className="share-btn flex items-center gap-2">
                            <p className='text-white'>Open</p>
                            <FaReddit  color="white" size={15} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

};

export default MemeContainer;