import { Card, Category } from '../../index'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Index() {
    let { state } = useLocation()
    const [productsCategory, setProductsCategory] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://fakestoreapi.com/products/category/${state.cat}`)
                if (response.status === 200) {
                    let data = await response.json()
                    setProductsCategory(data)
                } else {
                    console.log('ada gangguan product category');
                }
            } catch (error) { console.log('ada gangguan product category') }
        }

        fetchData()
    }, [state.cat])

    // console.log(state);
    return (
        <div>
            <Category />

            <p className='font-primary text-md md:text-xl ml-3 my-6'>Category {state.cat}</p>
            <div className='flex justify-center gap-4 md:gap-9 flex-wrap'>
                {productsCategory.map((data) => (
                    <div key={data.id}>
                        {<Card data={data} />}
                    </div>
                ))}
            </div>
        </div>
    )
}
