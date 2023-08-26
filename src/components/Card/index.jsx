import React from 'react'
import { Link } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Index(props) {
    let product = props.data
    // console.log(product);
    return (
        <div>
            <Link
                to={/detailproduct/ + product.slug}
                state={{
                    kode: product.kode,
                }}>
                <div className='w-40 md:w-60 rounded-lg border-2 border-primary hover:bg-purple-200 mx-auto mb-4' key={product.id}>
                    <LazyLoadImage
                        effect='opacity'
                        src={"https://ik.imagekit.io/aloywen/tumbas/product/" + product.gambar}
                        alt=""
                        style={{ objectFit: 'cover', width: 250, height: 200 }}
                        className='rounded-t-md' />
                    <div className='mt-2 ml-6 mb-6'>
                        <p className='font-primary text-gray-500'>{product.nama}</p>
                        <img src="/img/rating.png" alt="" className='w-20 mt-1' />
                        <p className='font-primary text-gray-700 mt-3 font-bold'>{`Rp. ${product.harga.toLocaleString("id-ID")}`}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
