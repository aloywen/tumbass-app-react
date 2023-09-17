import React from 'react'
import Cardcart from '../../Cardcart'
import { ContextDataCart } from '../../../config'

export default function Index() {
    const store = ContextDataCart();

    let dataCart = store.data.cart
    // console.log(dataCart);
    return (
        <div className='mx-14'>
            <p className='text-2xl font-primary line-clamp-2 text-gray-900 mt-36 mb-3'>Keranjang</p>

            <div className='flex flex-row'>
                <div className='flex flex-col w-8/12 gap-4 md:gap-9 flex-wrap my-10'>
                    {
                        dataCart.map((data) => (
                            <Cardcart data={data} />
                        ))
                    }
                </div>

                <div className='w-4/12'>
                    total
                </div>
            </div>
        </div>
    )
}
