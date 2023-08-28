import { useEffect, useState } from 'react'
// import Data from '../../../utils/db.json'
import { useLocation } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Index() {
    let { state } = useLocation();
    // const detail = Data.products;
    const [detailProduct, setDetailProduct] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://fakestoreapi.com/products/${state.kode}`)
                if (response.status === 200) {
                    let data = await response.json()
                    setDetailProduct(data)
                } else {
                    console.log('ada gangguan detail product');
                }
            }
            catch (error) {
                console.log('ada gangguan detail product');
            }
        }


        fetchData()
    }, [state])


    console.log(state);
    console.log(detailProduct);

    return (
        <div>
            <div>
                <div>
                    <LazyLoadImage
                        effect='opacity'
                        src={detailProduct.image}
                        alt=""
                        style={{ objectFit: 'cover', width: 300, height: 300 }}
                        className='rounded-t-md'
                    />
                </div>

                <div>
                    <p>{detailProduct.title}</p>
                    <span className='font-primary py-2 px-5 bg-secondary text-gray-700 mt-3 font-bold'>{`$. ${prodetailProductduct.price}`}</span>
                </div>
            </div>
        </div>
    )
}
