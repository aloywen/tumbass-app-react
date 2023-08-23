import React from 'react';
import Data from '../../utils/db.json'

import { Link } from 'react-router-dom'

export default function Index() {
    const data = Data.category
    return <div>
        <div className='w-screen md:-mt-2 h-16 md:h-12 bg-primary overflow-x-auto'>
            <div className='flex items-center gap-12 md:gap-16 md:justify-center md:mx-24'>
                {data.map((data) =>
                    <Link to={"/category/" + data.url}>
                        <div className='text-lg md:text-xl mt-2 ml-4 md:ml-0 text-white font-primary' key={data.id}>{data.nama}</div>
                    </Link>
                )}
            </div>
        </div>
    </div>;
}