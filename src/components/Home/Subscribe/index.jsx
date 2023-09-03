import React from 'react'

export default function Index() {
    return <div className='mt-12'>
        <div className="w-full h-64 md:h-96 text-center flex flex-col justify-center items-center mt-14 bg-subs bg-cover bg-bottom md:bg-center" >
            <p className='uppercase text-2xl md:text-4xl font-bold font-primary text-white mb-4'>subscribe for interesting info & promotion</p>
            <div className='flex flex-col md:flex-row justify-center gap-1 px-14' >
                <input type="text" className='border-2 border-primary rounded-lg pl-3 px-22 py-2 md:py-0 md:px-48' placeholder='email address ..' />
                <button className='bg-primary text-white px-20 py-2 rounded-lg font-primary font-bold hover:bg-purple-700'>Subscribe</button>
            </div>
        </div>
    </div >;
}