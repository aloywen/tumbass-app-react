import { Link } from 'react-router-dom'
import Card from '../../Card'
import { ContextDataItem } from '../../../config'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { JellyTriangle } from '@uiball/loaders'

export default function Index() {
    const data = ContextDataItem()


    // console.log(products);
    return <div className='md:mx-24 mt-14'>
        <p className='font-primary text-3xl md:text-4xl'>Recomended For You</p>

        <div className='flex justify-center flex-col'>
            <div className='flex flex-row justify-center gap-4 md:gap-9 flex-wrap mt-10'>

                {data.product ? <>
                    {
                        data.product.map((data =>
                            <Link key={data.id} to={/detailproduct/ + data.id} state={{ kode: data.id, cat: data.category }}>
                                <Card data={data} />
                            </Link>
                        ))
                    } </> :

                    <div className='flex items-center justify-center'><JellyTriangle
                        size={60}
                        speed={1.75}
                        color="black"
                    /> </div>
                }

            </div>

            <div className='mx-auto'>
                <Link to="/allproduct">
                    <button className='text-2xl rounded-lg bg-primary py-2 px-32 md:px-36 text-white font-primary hover:bg-purple-600'>see all</button>
                </Link>
            </div>
        </div>
    </div>;
}