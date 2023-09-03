import { useEffect, useState } from 'react'
import Card from '../../Card'
import { Link } from 'react-router-dom'

export default function Index() {
    const [products, setProducts] = useState([])
    const [loadmore, setLoadmore] = useState(8)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://fakestoreapi.com/products?limit=${loadmore}`)
                if (response.status === 200) {
                    let data = await response.json()
                    setProducts(data)
                } else {
                    console.log('ada gangguan allproduct')
                }
            } catch (error) {
                console.log('ada gangguan allproduct')
            }
        }

        fetchData()
    }, [])

    console.log(products);
    return (
        <div>
            <div className='flex justify-center gap-4 md:gap-9 flex-wrap mt-10'>
                {products.map((data =>
                    <Link to={/detailproduct/ + data.id} state={{ kode: data.id, cat: data.category }}>
                        <Card data={data} key={data.id} />
                    </Link>
                ))}

                <button className='text-2xl rounded-lg bg-primary py-2 px-32 md:px-36 text-white mx-auto font-primary hover:bg-purple-600'>Load More</button>

            </div>
        </div>
    )
}
