import { useEffect, useState } from 'react'
import Card from '../../Card'
import { Link } from 'react-router-dom'
import { JellyTriangle } from '@uiball/loaders'

export default function Index() {
    const [products, setProducts] = useState([])
    const [initPage, setInitPage] = useState(8)
    const [isLoading, setisLoading] = useState(true)


    const loadMore = async () => {
        setisLoading(true)
        try {
            let response = await fetch(`https://fakestoreapi.com/products?limit=${initPage}`)
            if (response.status === 200) {
                let newData = await response.json()
                setInitPage(initPage + 4)
                setProducts([...newData])
                setisLoading(false)
            } else {
                console.log('ada gangguan allproduct')
            }
        } catch (error) {
            console.log('ada gangguan allproduct')
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://fakestoreapi.com/products?limit=${initPage}`)
                if (response.status === 200) {
                    let data = await response.json()
                    setProducts(data)
                    setisLoading(false)
                } else {
                    console.log('ada gangguan allproduct')
                }
            } catch (error) {
                console.log('ada gangguan allproduct')
            }
        }

        fetchData()
    }, [])

    console.log(initPage);
    console.log(products);
    return (
        <div>
            <div className='flex justify-center gap-4 md:gap-9 flex-wrap mt-36 md:mb-6'>
                {products?.map((data =>
                    <Link to={/detailproduct/ + data.id} state={{ kode: data.id, cat: data.category }}>
                        <Card data={data} key={data.id} />
                    </Link>
                ))}

                {
                    isLoading === true ? <div className='flex items-center justify-center'><JellyTriangle
                        size={60}
                        speed={1.75}
                        color="black"
                    /> </div> : ''
                }

                {
                    isLoading === false ? <button onClick={() => loadMore()} className='text-2xl rounded-lg bg-primary py-2 px-16 md:px-16 text-white mx-auto font-primary hover:bg-purple-600'>Load More</button> : ''
                }

            </div>
        </div>
    )
}
