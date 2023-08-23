import React from 'react';
import data from '../../utils/db.json'

export default function Index() {

    const satu = data.hero[0]
    const dua = data.hero[1]
    const tiga = data.hero[2]

    return <div className='mt-10'>
        <div className='flex flex-col md:flex-row mx-auto md:justify-around md:mx-24'>

            <div className='bg-secondary w-72 md:w-96 mx-auto md:mx-0 p-10 mb-8 md:mb-0 md:px-20 md:py-20 text-center rounded-lg shadow-lg hover:bg-yellow-200'>
                <img src="https://ik.imagekit.io/aloywen/tumbas/hero/tas.png?updatedAt=1691712080626" alt="" className='h-32 w-32 mx-auto md:w-44 md:h-44' />
                <p className='font-primary text-2xl font-bold'>{satu.nama}</p>
            </div>

            <div className='flex flex-col text-center'>
                <div className='mb-6 bg-secondary2 shadow-lg rounded-lg hover:bg-green-300 w-72 md:w-96 p-10 mx-auto md:py-6 md:px-20'>
                    <img src="https://ik.imagekit.io/aloywen/tumbas/hero/discounts.png?updatedAt=1691712080639" alt="" className='h-32 w-32 mx-auto md:w-32 md:h-32' />
                    <p className='font-primary text-xl font-bold'>{dua.nama}</p>
                </div>
                <div className='bg-secondary shadow-lg rounded-lg hover:bg-yellow-200 w-72 md:w-96 p-10 mx-auto md:py-6 md:px-20'>
                    <img src="https://ik.imagekit.io/aloywen/tumbas/hero/free-ship.png?updatedAt=1691712080658" alt="" className='md:w-40 md:h-28 mx-auto' />
                    <p className='font-primary text-xl font-bold'>{tiga.nama}</p>
                </div>
            </div>

        </div>
    </div>;
}