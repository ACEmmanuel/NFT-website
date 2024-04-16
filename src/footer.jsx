import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='border-b mt-24'></div>


        <div className=' container mx-auto mt-12 mb-12 lg:mt-14 lg:mb-14'>
          <div className='flex flex-wrap justify-between px-10 gap-y-5 items-center'>
            <div className='flex flex-nowrap gap-10 lg:gap-14 items-center'>
              <p className='text-xl font-bold'>NFT</p>

              <span className='flex flex-wrap gap-4 lg:gap-6 text-sm lg:text-[1rem]'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Store</a>
                <a href="">Work</a>
                <a href="">Pages</a>
                <a href="">Contact</a>
              </span>
            </div>

            <div className='flex flex-nowrap gap-4 lg:gap-6 text-sm lg:text-[1rem] mt-4 sm:mt-0'>
              <p><i class='bx bxl-facebook text-[1.3rem]'></i></p>
              <p><i class='bx bxl-twitter text-[1.3rem]' ></i></p>
              <p><i class='bx bxl-instagram-alt text-[1.3rem]' ></i></p>
              <p><i class='bx bxl-linkedin text-[1.3rem]' ></i></p>
              <p><i class='bx bxl-youtube text-[1.3rem]' ></i></p>
              <p><i class='bx bxl-whatsapp text-[1.3rem]' ></i></p>
            </div>
          </div>
        </div>

        <div className='border-b'></div>

        <p className='mt-5 mb-4 text-[0.5rem] lg:text-sm text-center'>Copyright @ NFT | Designed by ACEmmanuel</p>
    </>
  )
}

export default Footer