import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Index() {
    let { state } = useLocation();
    const [detailProduct, setDetailProduct] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [qty, setQty] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://fakestoreapi.com/products/${state.kode}`)
                if (response.status === 200) {
                    let data = await response.json()
                    setDetailProduct(data)
                    setisLoading(false)
                } else {
                    console.log('ada gangguan detail product');
                }
            }
            catch (error) {
                console.log('ada gangguan detail product');
            }
        }

        fetchData()
    }, [])


    console.log(state.kode);
    console.log(detailProduct);

    return (
        <div>
            {isLoading ? 'loading' :
                <div className='flex justify-around md:mx-20 gap-0'>
                    <div>
                        <LazyLoadImage
                            effect='opacity'
                            src={detailProduct.image}
                            alt=""
                            style={{ width: '250px', objectFit: 'contain' }}
                            className='rounded-t-md'
                        />
                    </div>

                    <div className='w-2/3 ml-6'>
                        <p className='text-2xl font-primary text-gray-800 '>{detailProduct.title}</p>
                        <span className='font-primary py-2 px-5 text-gray-700 mt-3 font-bold'>{`$. ${detailProduct.price}`}</span>
                    </div>

                    <div className='w-2/3'>
                        <div className='flex'>
                            <button className=''>-</button>
                            <p>{qty}</p>
                            <button className=''>+</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
