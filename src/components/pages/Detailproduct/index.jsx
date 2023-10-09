import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { JellyTriangle } from '@uiball/loaders'
import { ContextDataItem } from '../../../config/'


export default function Index() {
    let { state } = useLocation();
    const data = ContextDataItem()

    const [detailProduct, setDetailProduct] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [note, setNote] = useState('')
    const [notes, setisnotes] = useState(false)
    const [qty, setQty] = useState(1)
    const [price, setPrice] = useState()
    const [subTotal, setSubTotal] = useState()
    const [warning, setWarning] = useState(false)
    const [added, setAdded] = useState(false)


    const addToCart = () => {
        const found = data.cart.some(e => e.id === detailProduct.id)
        if (!found) {
            data.setCart(
                (prevState) => [...prevState, {
                    id: detailProduct.id,
                    title: detailProduct.title,
                    image: detailProduct.image,
                    qty,
                    subprice: detailProduct.price,
                    grandprice: subTotal,
                    checked: true,
                    notes: note
                }],
                setAdded(true)
            )
        } else {
            setWarning(true)
        }

        data.setTotalCart(
            data.totalCart + 1
        )
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://fakestoreapi.com/products/${state.kode}`)
                if (response.status === 200) {
                    let data = await response.json()
                    setDetailProduct(data)
                    setPrice(data.price)
                    setisLoading(false)
                    setSubTotal(data.price)
                } else {
                    console.log('ada gangguan detail product');
                }
            }
            catch (error) {
                console.log('ada gangguan detail product');
            }
        }


        fetchData()
    }, [])

    useEffect(() => {
        setSubTotal(qty * price)

    }, [qty])

    return (
        <div className='md:mt-32'>

            {warning ? alert('Product already in cart!', setWarning(false)) : null}
            {added ? alert('Product added!', setAdded(false)) : null}

            {isLoading ? <div className='flex items-center justify-center'><JellyTriangle
                size={60}
                speed={1.75}
                color="black"
            /></div> :

                // CONTENT PRODUCT
                <div className='md:mx-20'>
                    <div className='flex md:mb-10 gap-2 md:w-7/12 overflow-hidden hover:w-full'>
                        <Link to={"/"} className='text-primary text-md font-primary'>Home</Link>
                        {'>'}
                        <Link to={'/category/' + detailProduct.category.split(' ').join('-')} state={{ cat: detailProduct.category }} className='text-primary line-clamp-1 text-md font-primary'>{state.cat}</Link>
                        {'>'}
                        <p className='text-md line-clamp-1 font-primary'>{detailProduct.title}</p>
                    </div>
                    <div className='flex justify-between gap-0 relative'>
                        <div className='flex w-2/3'>

                            {/* IMAGE */}
                            <div >
                                <LazyLoadImage
                                    effect='opacity'
                                    src={detailProduct.image}
                                    alt=""
                                    style={{ width: '250px', objectFit: 'contain' }}
                                    className='rounded-t-md'
                                />
                            </div>

                            {/* TITLE & DESCRIPSTION */}
                            <div className='w-2/3 ml-16'>
                                <p className='text-lg font-primary line-clamp-2 text-gray-800 mb-3'>{detailProduct.title}</p>
                                <span className='font-primary text-2xl text-gray-700 font-bold'>{`$. ${detailProduct.price}`}</span>


                                <p className='text-lg font-primary font-semibold text-gray-900 mt-4'>Description</p>
                                <p className='text-md font-primary text-gray-600 mt-2 pr-3'>{detailProduct.description}</p>
                            </div>
                        </div>


                        {/* NOTES */}
                        <div className='w-1/3 sticky md:top-48 right-0'>
                            <div className='border border-gray-600 py-3 px-2 rounded-lg w-2/3'>
                                <p>Quantity & Notes</p>
                                <hr className='my-3' />

                                {/* QTY */}
                                <div className="flex items-center gap-4">
                                    <div className='flex w-28 border border-primary rounded-lg justify-around items-center py-1'>
                                        <button disabled={qty == 1} onClick={() => setQty(qty - 1)} className={`text-lg ${qty == 1 ? 'cursor-not-allowed' : ''} `}>-</button>
                                        <p>{qty}</p>
                                        <button onClick={() => setQty(qty + 1)} className='text-lg'>+</button>
                                    </div>
                                    <p className='font-primary'>Stok : {detailProduct.rating.count}</p>
                                </div>

                                {notes ?
                                    <div>
                                        <input className='border border-primary w-full rounded-lg p-2 mt-3 text-gray-700 font-primary' type="text" placeholder='Example : White Color' onChange={(e) => setNote(e.target.value)} />
                                        <button onClick={() => setisnotes(false)} >Cancel</button>
                                    </div> :
                                    <button onClick={() => setisnotes(true)} className='text-primary font-medium flex my-3 gap-1'>
                                        <svg className='w-5' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                        </svg><p>Notes</p>
                                    </button>
                                }



                                {/* SUBPRICE & BUTTON ADD CART */}
                                <div className='flex items-center justify-between mt-3'>
                                    <p className='font-primary text-gray-500'>Subtotal</p>

                                    <p className='font-primary text-xl font-medium'>$ {subTotal}</p>
                                </div>

                                <div className='flex my-3'>
                                    <button className='w-44 rounded-lg px-3 py-2 border border-primary font-primary text-primary text-xs'>Buy</button>
                                    <button className='w-44 rounded-lg px-3 py-2 bg-primary font-primary text-white text-xs'
                                        onClick={addToCart}
                                    >+ Add Cart</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='mt-20 mb-10'>
                        <p className='font-primary text-xl md:text-2xl'>Recomended For You</p>

                        {/* <div className='w-80 h-20 flex justify-center items-center border-2 border-gray-700 text-primary font-primary text-xl rounded-md'>Product Already In Cart</div> */}
                    </div>
                </div>
            }



        </div >
    )
}
