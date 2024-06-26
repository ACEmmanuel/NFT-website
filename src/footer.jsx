import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='border-b mt-24 border-white/40'></div>


        <div className=' container mx-auto mt-12 mb-12 lg:mt-14 lg:mb-14'>
          <div className='flex flex-nowrap justify-between px-10 gap-y-5 items-center'>
            <div className='flex flex-nowrap gap-2 lg:gap-14 items-center '>


              <img src='./nft.png' className='size-[2.7rem] lg:size-[3.5rem]'/>

              {/* <span className='hidden lg:flex flex-wrap gap-4 lg:gap-9 text-sm lg:text-[.95rem]'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Store</a>
                <a href="">Work</a>
                <a href="">Contact</a>
              </span> */}
            </div>

            <div className='flex flex-nowrap gap-3 md:gap-5 text-[.4rem] lg:text-[1rem] mt-4 sm:mt-0 items-center gap-y-5'>
              <p><i class='bx bxl-facebook text-[1.3rem]'></i></p>
              <p><i class='bx bxl-twitter text-[1.3rem]' ></i></p>
              <p><i class='bx bxl-instagram-alt text-[1.3rem]' ></i></p>
              <p><i class='bx bxl-linkedin text-[1.3rem]' ></i></p>
              <p><i class='bx bxl-youtube text-[1.3rem]' ></i></p>
              <p><i class='bx bxl-whatsapp text-[1.3rem]' ></i></p>
            </div>
          </div>
        </div>

        <div className='border-b border-white/40 w-[90%] mx-auto'></div>

        <p className='mt-5 text-[0.7rem] lg:text-sm text-center'>Copyright @ NFT | Coded by ACEmmanuel | Designed by BRIX Templates</p>
    </>
  )
}

export default Footer