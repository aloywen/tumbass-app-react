import React from 'react';
import Data from '../../../utils/db.json'

export default function Index() {
    const help = Data.help
    const payment = Data.payment

    return <div className='px-10 md:px-24 pt-16 bg-footer pb-10'>
        <div className="flex flex-col md:flex-row justify-around">
            <div className='md:w-1/3'>
                <p className='font-bold font-primary text-2xl uppercase mb-3 md:mb-5'>Help</p>
                {help.map((data =>
                    <p key={data.id} className='font-primary hover:text-primary text-lg'>{data.nama}</p>
                ))}
            </div>
            <div className='md:w-1/3 mt-5 md:mt-0'>
                <p className='font-bold font-primary text-2xl uppercase mb-3 md:mb-5'>customer service</p>
                <p className='font-primary font-medium text-lg'>cs@tumbas.com</p>
                <p className='font-primary font-medium text-lg'>WhatApps : 081223456789</p>
            </div>
            <div className='md:w-1/3'>
                <p className='font-bold font-primary text-2xl uppercase mb-5 mt-5 md:mt-0'>payment method</p>
                <div className='flex flex-wrap gap-5'>
                    {payment.map((data) =>
                        <img key={data.id} src={"https://ik.imagekit.io/aloywen/tumbas/payment/" + data.gambar} alt="" style={{ height: 30, objectFit: 'cover' }} />
                    )}
                </div>
            </div>
        </div>


    </div>;
}