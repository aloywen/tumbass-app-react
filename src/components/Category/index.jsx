import { useEffect, useState } from 'react';
import Data from '../../utils/db.json'

import { Link } from 'react-router-dom'

export default function Index() {
    const data = Data.category

    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch('https://fakestoreapi.com/products/categories')
                if (response.status === 200) {
                    let data = await response.json()
                    setCategory(data)
                } else {
                    console.log('ada gangguan category');
                }
            } catch (error) {
                console.log('ada gangguan category');
            }
        }

        fetchData()
    }, [])

    return <div>
        <div className='w-screen md:-mt-2 h-14 overflow-x-auto md:h-12 bg-primary'>
            <div className='flex items-center gap-12 md:gap-16 md:justify-center md:mx-24'>
                {category.map((data) =>
                    <Link to={"/category/" + data.split(' ').join('-')} state={{ data: data }}>
                        <p className='hover:text-secondary2 whitespace-nowrap break-normal text-md md:text-xl mt-2 ml-4 md:ml-0 text-white font-primary' key={data}>{data}</p>
                    </Link>
                )}
            </div>
        </div>
    </div>;
}