import React from 'react'
import Cardcart from '../../Cardcart'
import { ContextDataItem } from '../../../config'

export default function Index() {
    const store = ContextDataItem();

    let dataCart = store.cart
    let count = store.totalCart
    // console.log(count);
    return (
        <div className=''>
            <p className='mx-14 text-2xl font-primary line-clamp-2 underline text-gray-900 mt-20 md:mt-36 mb-3'>Cart</p>

            <div className='flex flex-col md:flex-row relative'>
                <div className='mx-14 flex flex-col w-8/12 gap-4 md:gap-9 flex-wrap mt-8 mb-36'>
                    {
                        dataCart.length > 0 ?
                            dataCart.map((data) => (
                                <Cardcart data={data} key={data.title} />
                            )) : <p>No product selected yet ..</p>
                    }
                </div>

                <div className='fixed bottom-0 w-full bg-slate-100 md:bg-transparent md:w-4/12 md:top-0 md:relative md:mr-14'>
                    <div className='p-4 shadow-lg w-full m-2'>
                        <p>Summary</p>
                        <p>Total Price {dataCart.length > 1 ? 'items' : 'item'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
