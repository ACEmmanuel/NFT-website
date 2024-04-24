import React from 'react';
import {data} from './data'

const Card = () => {
              return (
                <>

            <div className='grid container mx-auto w-full overflow-hidden responsive -z-50'>
        
                    {data.map((e)=>{
                            const {id, name, nft, about, price, img, count, profile, ETH} = e;
                            return(

                              <div className='w-[18.5rem] mb-8 mx-auto -z-50' key={id}>
                                      <div className='flex flex-col items-center bg-gray-500 h-[30rem] border border-white/30 filter backdrop-blur-lg px-[1.3rem]'>
                                          <div className='bg-gray-900 w-[100%] h-[50%] mt-6 bg-cover bg-no-repeat bg-center aspect-square' style={{backgroundImage : `url(${img})`}}></div>
                                      <div className='text-left mt-8 text-balance w-full'>

                                        <div className='straight'>

                                          <h2 className='font-bold text-lg'>{name}</h2>
                                          
                                          <div className='flex flex-row items-center gap-2 flex-nowrap'>
                                            <div>()</div> 
                                            <div>{count}</div> 
                                          </div>
                                        </div>


                                          <div className='mt-5 flex flex-row gap-4 items-center'>
                                            <img src={profile} className='profile'/>

                                            <div className='-space-y-2'>
                                              <h1 className='font-medium text-[15px]'>Owner</h1>
                                              <p className='text-[17px]'>@wzard</p>
                                            </div>
                                          
                                          </div>


                                      </div>
                                    <div className='straight mt-9 w-full'>
                                      <p>Current Bid</p>
                                      <p className='font-bold'>{ETH}</p>
                                    </div>
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