import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Index() {
    let { state } = useLocation();
    const [detailProduct, setDetailProduct] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [qty, setQty] = useState(1)
    const [price, setPrice] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://fakestoreapi.com/products/${state.kode}`)
                if (response.status === 200) {
                    let data = await response.json()
                    setDetailProduct(data)
                    setPrice(data.price)
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


    // console.log(state.kode);
    // console.log(detailProduct);

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
                        <div className='border border-gray-600 py-3 px-2 rounded-lg w-2/3'>
                            <div className="flex items-center gap-4">
                                <div className='flex w-28 border border-primary rounded-lg justify-around items-center py-1'>
                                    <button className='text-lg'>-</button>
                                    <p>{qty}</p>
                                    <button className='text-lg'>+</button>
                                </div>
                                <p className='font-primary'>Stok : {detailProduct.rating.count}</p>
                            </div>

                            <button className='text-primary font-medium flex my-3 gap-1'>
                                <svg className='w-5' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg><p>Notes</p>
                            </button>

                            <div className='flex items-center justify-between'>
                                <p className='font-primary text-gray-500'>Subtotal</p>

                                <p className='font-primary text-xl font-medium'>$ {price}</p>
                            </div>

                            <div className='flex my-3'>
                                <button className='w-44 rounded-lg px-5 py-2 border border-primary font-primary text-primary'>Buy</button>
                                <button className='w-44 rounded-lg px-5 py-2 bg-primary font-primary text-white'>+ Add Cart</button>
                            </div>

                            <div></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
