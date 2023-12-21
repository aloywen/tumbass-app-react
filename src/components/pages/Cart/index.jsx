import Cardcart from '../../Cardcart'
import { ContextDataItem } from '../../../config'

export default function Index() {
    const store = ContextDataItem();
    // console.log(store.grandTotal);
    console.log(store);

    let dataCart = store.cart

    // const [grandTotal, setgrandTotal] = useState(0)


    return (
        <div className=''>
            <p className='mx-14 text-2xl font-primary line-clamp-2 underline text-gray-900 mt-20 md:mt-36 mb-3'>Cart</p>

            <div className='flex flex-col md:flex-row relative'>
                <div className='mx-7 flex flex-col w-10/12 md:w-8/12 gap-4 md:gap-9 flex-wrap mt-8 mb-44'>
                    {
                        dataCart.length > 0 ?
                            dataCart.map((data) => (
                                <Cardcart data={data} key={data.title} />
                            )) : <p>No product selected yet ..</p>
                    }
                </div>

                <div className='fixed bottom-0 w-full bg-slate-100 md:bg-transparent md:w-4/12 md:top-0 md:relative md:mr-14'>
                    <div className='p-4 shadow-lg w-full m-2'>
                        <p className="font-primary font-semibold">Summary</p>
                        <div className='flex justify-between'>

                            <p className="font-primary mt-3">Total Price {dataCart.length > 1 ? 'items' : 'item'}</p>
                            <p className="font-primary mt-3">Rp. {store.grandTotal}</p>

                        </div>
                        <hr className='mt-3' />

                        <div className='flex justify-between mt-3'>

                            <p className="font-primary font-semibold mt-3">Grand Total</p>
                            <p className="font-primary font-semibold mt-3">Rp. {store.grandTotal}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
