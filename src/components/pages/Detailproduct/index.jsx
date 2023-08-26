import React from 'react'
import Data from '../../../utils/db.json'
import { useLocation } from 'react-router-dom'

import Card from '../../Card'

export default function Index() {
    let { state } = useLocation();
    const detail = Data.products;

    console.log(state.kode);
    console.log(detail);




    return (
        <div>
            {
                detail.map((data) =>
                    <div>
                        {data.kode === state.kode ? <Card data={data}
                        // nama-item={data.nama}
                        // harga={data.harga}
                        // stok={data.stok}
                        // gambar={data.gambar}
                        /> : ''}
                    </div>
                )
            }
        </div>
    )
}
