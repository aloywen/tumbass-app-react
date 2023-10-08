import { useEffect, useState } from 'react';
import { ContextDataItem } from '../../config'
import { Link } from 'react-router-dom'

export default function Index() {
    const cat = ContextDataItem()


    console.log(cat);
    return <div>
        <div className='w-screen md:-mt-2 h-14 overflow-x-auto md:h-12 bg-primary'>
            <div className='flex items-center gap-12 md:gap-16 md:justify-center md:mx-24'>
                {cat.category?.map((data) =>
                    <Link key={data} to={"/category/" + data.split(' ').join('-')} state={{ cat: data }}>
                        <p className='hover:text-secondary2 whitespace-nowrap break-normal text-md md:text-xl mt-2 ml-4 md:ml-0 text-white font-primary' >{data}</p>
                    </Link>
                )}
            </div>
        </div>
    </div>;
}