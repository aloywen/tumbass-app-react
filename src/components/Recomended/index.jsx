import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Index() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch('https://fakestoreapi.com/products?limit=8')
                if (response.status === 200) {
                    let data = await response.json()
                    setProducts(data)
                } else {
                    console.log('ada gangguan');
                }
            } catch (error) {
                console.log('ada gangguan');
            }
        }

        fetchData()
    }, [])

    return <div className='md:mx-24 mt-14'>
        <p className='font-primary text-3xl md:text-4xl'>Recomended For You</p>

        <div className='flex justify-center gap-4 md:gap-9 flex-wrap mt-10'>
            {products.map((data =>
                <Link to={/detailproduct/ + data.id} state={{ kode: data.id }}>
                    <div className='w-40 md:w-60 rounded-lg border-2 border-primary hover:bg-purple-200 mx-auto mb-4' key={data.id}>
                        <LazyLoadImage
                            effect='opacity'
                            src={data.image}
                            alt={data.title}
                            style={{ objectFit: 'cover', width: 250, height: 200 }}
                            className='rounded-t-md' />
                        <div className='mt-2 ml-6 mb-6'>
                            <p className='font-primary text-gray-500'>{data.title}</p>
                            <img src="/img/rating.png" alt="" className='w-20 mt-1' />
                            <p className='font-primary text-gray-700 mt-3 font-bold'>{`$. ${data.price}`}</p>
                        </div>
                    </div>
                </Link>
            ))}

            <button className='text-2xl rounded-lg bg-primary py-2 px-32 md:px-36 text-white mx-auto font-primary hover:bg-purple-600'>see all</button>
        </div>
    </div>;
}