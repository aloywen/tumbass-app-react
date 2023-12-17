import { useEffect, useState } from 'react'
import Data from '../../../utils/db.json'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { ContextDataItem } from '../../../config'



export default function Index() {
    const data = ContextDataItem()
    const product = Data.special

    const [warning, setWarning] = useState(false)
    const [added, setAdded] = useState(false)

    console.log(data)
    const addToCart = (item) => {
        console.log(item);
        const found = data.cart.some(e => e.id === item.id)
        if (!found) {
            data.setCart(
                (prevState) => [...prevState, {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    qty: 1,
                    subprice: item.subprice,
                    grandprice: item.grandprice,
                    checked: false,
                    notes: ''
                }],
                setAdded(true)
            )
        } else {
            setWarning(true)
        }

        data.setTotalCart(
            data.totalCart + 1
        )
    }

    return <div className='md:mx-24'>

        {warning ? alert('Product already in cart!', setWarning(false)) : null}
        {added ? alert('Product added!', setAdded(false)) : null}

        <div className='flex justify-between font-primary mt-20 mb-8 px-3 md:px-0'>
            <p className='text-xl md:text-4xl'>Special For You</p>
            <p className='text-xl md:text-4xl text-gray-400'>see all</p>
        </div>

        <Swiper className='mt-3' slidesPerView={1} spaceBetween={10} pagination={{
            "clickable": true
        }} breakpoints={{
            "640": {
                "slidesPerView": 1,
                "spaceBetween": 20
            },
            "768": {
                "slidesPerView": 1,
                "spaceBetween": 40
            },
            "1024": {
                "slidesPerView": 3,
                "spaceBetween": 50
            }
        }}>
            {product.map((data) =>
                <SwiperSlide key={data.id} >
                    <div className='w-72 md:w-80 rounded-xl border-2 border-primary mx-auto'>
                        <LazyLoadImage
                            effect="blur"
                            src={"https://ik.imagekit.io/aloywen/tumbas/special/" + data.gambar} alt="" className='rounded-t-lg'
                            style={{ objectFit: 'cover', width: 350, height: 300 }} />

                        <div className='mt-6 ml-6'>
                            <p className='font-bold font-primary text-xl'>{data.nama}</p>
                            <img src="/img/rating.png" alt="" className='mt-2' />
                            <div className='flex gap-4 mt-2'>
                                <p className='line-through font-primary text-xl text-gray-500'>{`$. ${data.harga.toLocaleString("id-ID")}`}</p>
                                <p className='font-bold font-primary text-xl'>{`$. ${data.disc.toLocaleString("id-ID")}`}</p>
                            </div>

                            <button className='px-12 py-1 bg-primary rounded-lg flex text-white items-center gap-2 font-primary mx-auto my-8 hover:bg-purple-800'
                                onClick={() => addToCart({
                                    id: data.id,
                                    title: data.nama,
                                    image: "https://ik.imagekit.io/aloywen/tumbas/special/" + data.gambar,
                                    subprice: data.disc,
                                    grandprice: data.disc,
                                })}
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                add to cart
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    </div>;
}