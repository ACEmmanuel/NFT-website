import React from 'react';
import {data} from './data'

const Test = () => {
  return (
    <>
    <div>
        {data.map((e)=>{
                const {id, name, nft, about, price} = e;
                console.log(e);
                return(
                    <div className='flex flex-col items-center w-full max-w-[21rem] mb-8  ml-10 mt-10' key={id}>
                            <div className='flex flex-col items-center bg-blue-900 w-full h-[30rem] rounded-md overflow-hidden'>

                            <div className='bg-gray-900 w-[88%] h-[50%] rounded-md mt-7'></div>

                            <div className='text-center mt-8 px-4 text-balance'>
                            <h2 className='font-bold text-lg'>{name}</h2>
                            <p className='text-sm mt-2'>{about}</p>
                        </div>

                        <p className='text-sm mt-7'>{nft}</p>
                    </div>

                <div className='mt-8'>
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

export default Test