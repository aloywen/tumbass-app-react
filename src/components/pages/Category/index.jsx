import React from 'react'
import { useLocation } from 'react-router-dom'

import { Card, Category } from '../../index'

import Data from '../../../utils/db.json'

export default function Index() {
    let { state } = useLocation()
    const productCategory = Data.products
    // console.log(state);
    return (
        <div>
            <Category />

            <p className='font-primary text-md md:text-xl ml-3 my-6'>Category {state.data}</p>


            <div className='flex justify-center gap-4 md:gap-9 flex-wrap'>
                {

                    productCategory.map((data) => (
                        <div>
                            {
                                data.cat === state.data ? <Card data={data} key={data.id} /> : 'tes'
                            }
                        </div>
                    ))

                }
            </div>
        </div>
    )
}
