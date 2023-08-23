import React from 'react';
import Data from '../../utils/db.json'

export default function Index() {
    const shipping = Data.shipping

    return <div className='w-full bg-footer pb-10'>
        <hr className='border-1 border-gray-300 md:pb-10' />

        <div className='flex flex-col md:flex-row md:justify-around px-2 md:px-24'>
            <div className='flex flex-col justify-center md:w-1/2 px-3 order-last md:order-first pt-10'>
                <div className='flex items-center'>
                    <img src="https://img.icons8.com/metro/64/000000/facebook-new--v2.png" alt="" className='h-8 w-8 hover:fill-primary' />
                    <img src="https://img.icons8.com/glyph-neue/64/000000/instagram-new.png" alt="" className='ml-4 h-10 w-10 hover:fill-primary' />
                </div>
                <div>
                    <p className='font-medium font-primary mt-4 text-xl'><strong className='h-8 w-8 mb-2'>&copy;</strong> 2022 Tumbas Shop</p>
                    <hr className='my-2' />
                    <p className='font-primary text-xl'>icons By <a target="_blank" rel="noreferrer" href="https://icons8.com/" className='text-primary'>icons8.com</a> & <a target="_blank" rel="noreferrer" href="https://heroicons.dev/" className='text-primary'>Heroicon.dev</a>
                    </p>
                    <p className='font-primary text-xl'>Image by <a target="_blank" rel="noreferrer" href="https://unsplash.com/" className='text-primary mt-1'>Unsplash.com</a></p>
                </div>
            </div>

            <div className='flex flex-col md:w-1/2'>
                <p className='font-primary text-xl text-center mb-5 mt-8 md:mt-0'>Shipping Partner</p>
                <div className='flex flex-wrap md:px-20 justify-center'>
                    {shipping.map((data) =>
                        <img key={data.id} src={"https://ik.imagekit.io/aloywen/tumbas/shipping/" + data.gambar} alt="" style={{ height: 40, objectFit: 'cover', marginRight: 60, marginBottom: 10 }} />
                    )}
                </div>
            </div>
        </div>
    </div>;
}