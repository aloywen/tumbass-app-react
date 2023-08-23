import React from 'react'
import Data from '../../utils/db.json'
import { useLocation } from 'react-router-dom'

export default function Index() {
    let { state } = useLocation();
    // detail = data.

    console.log(state.id);
    console.log(Data.products);


    return (
        <>
            <div>Tes Detail Product</div>
        </>
    )
}
