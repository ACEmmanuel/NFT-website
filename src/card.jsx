import React from 'react';
import {data} from './data'

const Card = () => {
              return (
                <>
      {/* <div className='flex flex-col items-center w-full max-w-[21rem] mb-8                    '>
          <div className='flex flex-col items-center bg-blue-900 w-full h-[30rem] rounded-md overflow-hidden'>
              <div className='bg-gray-900 w-[88%] h-[50%] rounded-md mt-7'></div>

              <div className='text-center mt-8 px-4 text-balance'>
                  <h2 className='font-bold text-lg'>Crystal Card 1</h2>
                  <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>

              <p className='text-sm mt-7'>NFT Collection 1</p>
          </div>

          <div className='mt-8'>
            <p>$2,500.00 USD</p>
            <h1 className='font-bold text-lg mt-1'>Crystal Card 1</h1>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p className='mt-7 underlined'>View NFT</p>
          </div>

    </div> */}


            <div className='grid container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-[5rem] lg:mt-[7rem] overflow-hidden px-5 lg:px-20 gap-y-16 gap-x-8 '>
        
                    {data.map((e)=>{
                            const {id, name, nft, about, price, img} = e;
                            console.log(e);
                            return(

                              <div className='min-w-[16rem] max-w-[20rem] mb-8 mx-auto' key={id}>
                                      <div className='flex flex-col items-center bg-blue-900 h-[30rem] rounded-xl overflow-hidden'>
                                          <div className='bg-gray-900 w-[88%] h-[50%] rounded-xl mt-7 bg-cover bg-no-repeat bg-center aspect-square' style={{backgroundImage : `url(${img})`}}></div>
                                          <div className='text-center mt-8 px-4 text-balance'>
                                          <h2 className='font-bold text-lg'>{name}</h2>
                                          <p className='text-sm mt-2'>{about}</p>
                                      </div>

                                    <p className='text-sm mt-6 lg:mt-8'>{nft}</p>
                                  </div>

                                  <div className='mt-6 text-center md:text-left'>
                                      <p>{price}</p>
                                      <h1 className='font-bold text-lg mt-1'>{name}</h1>
                                      <p className='text-sm mt-2'>{about}</p>

                                      <p className='mt-7 underlined'>View NFT</p>
                                  </div>

                              </div>
                            )
                    })}
              
            </div>
    </>
  )
}

export default Card