import React from 'react'
import { Link } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Index(props) {
    let product = props.data
    // console.log(product);
    return (
        <div key={product.id}>
            <Link
                to={/detailproduct/ + product.id} state={{ kode: product.id, cat: product.category }}
            >
                <div className='w-40 md:w-60 rounded-lg border-2 border-primary hover:bg-purple-200 mx-auto mb-4' >
                    <LazyLoadImage
                        effect='opacity'
                        src={product.image}
                        alt=""
                        style={{ objectFit: 'cover', width: 250, height: 200 }}
                        className='rounded-t-md' />
                    <div className='mt-2 ml-6 mb-6'>
                        <p className='font-primary line-clamp-2 text-gray-500'>{product.title}</p>
                        <img src="/img/rating.png" alt="" className='w-20 mt-1' />
                        <p className='font-primary text-gray-700 mt-3 font-bold'>{`$. ${product.price}`}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
