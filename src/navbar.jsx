import {React, useState} from 'react';

const Nav = () => {

    const [active, setActive] = useState(false);
      

    const toggleMenu = () => {
        setActive(!active)
    }

  return (
    <>
        <div className="container mx-auto flex flex-row w-full justify-between items-center text-sm p-6">
            <p className='text-4xl'>NFT</p>

            <span className='hidden flex-row gap-10 lg:flex text-[1rem]'>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Store</a>
              <a href="">Work</a>
              <a href="">Pages</a>
              <a href="">Cart(3)</a>
            </span>

            <button className='btn hidden lg:block'>Browse Gallery</button>

            <div className="lg:hidden">
              {active ? <span className="md:hidden" onClick={toggleMenu}> <i class='bx bx-x text-2xl'>X</i> </span> :  <span className="lg:hidden" onClick={toggleMenu}> <i class='bx bx-menu text-2xl cursor-pointer' ></i> </span>}
                                
              {active && (
                  <div className="modal">
                      <div><i class='bx bx-x-circle text-[4rem] absolute top-2 right-2' onClick={toggleMenu}></i></div>
                      <br />
                      <div onClick={toggleMenu}><a href="#home">Home</a></div>
                      <br />
                      <div onClick={toggleMenu}><a href="#home">About</a></div>
                      <br />
                      <div onClick={toggleMenu}><a href="#contact">Store</a></div>
                      <br />
                      <div onClick={toggleMenu}><a href="#contact">Work</a></div>
                      <br />
                      <div onClick={toggleMenu}><a href="#contact">Pages</a></div>
                      <br />
                      <div onClick={toggleMenu}><a href="#contact">Cart</a></div>
                      <br />
                </div>
              )}

            </div>

        </div>
    </>
  )
}

export default Nav;
