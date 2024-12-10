import React from 'react'

const Navbar = ({setHomeScreen , setShowSavedMemes}) => {

    function showMainScreen() {
        setHomeScreen(true);
        setShowSavedMemes(false);
    };
  return (
    <div className=''>
        <div className="nav flex justify-around content-center items-center p-5">
            <div className="nav-left">
                <p onClick={() => {showMainScreen()}} className='text-3xl cursor-pointer text-green-500 font-bold'>Memey</p>
            </div>
            <div className="flex gap-5 ">
                <a href="https://github.com/muffakiribnhamid" target='_blank' className='text-green-500'>Github</a>
                <a  className='text-green-500 cursor-pointer' onClick={() => {setShowSavedMemes(true)}}>Saved Memes</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar