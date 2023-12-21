import { useState, useContext, createContext, useEffect } from 'react'

export const DataItemContext = createContext({})

export function ContextDataItem() {
    return useContext(DataItemContext)
}

export function DataItem({ children }) {

    const [product, setProduct] = useState()
    const [cart, setCart] = useState([])
    const [category, setCategory] = useState()
    const [totalCart, setTotalCart] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)

    const appContextValue = {
        product,
        setProduct,
        cart,
        setCart,
        category,
        setCategory,
        totalCart,
        setTotalCart,
        grandTotal,
        setGrandTotal
    }

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                let response = await fetch('https://fakestoreapi.com/products/categories')
                if (response.status === 200) {
                    let data = await response.json()
                    setCategory(data)
                } else {
                    console.log('ada gangguan category');
                }
            } catch (error) {
                console.log('ada gangguan category');
            }
        }

        const fetchProduct = async () => {
            try {
                let response = await fetch('https://fakestoreapi.com/products?limit=8')
                if (response.status === 200) {
                    let dataP = await response.json()
                    setProduct(dataP)
                } else {
                    console.log('ada gangguan category');
                }
            } catch (error) {
                console.log('ada gangguan category');
            }
        }

        fetchCategory()
        fetchProduct()
    }, [])

    return (
        <DataItemContext.Provider value={appContextValue}>
            {children}
        </DataItemContext.Provider>
    )

}