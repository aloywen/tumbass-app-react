import { useState, useContext, createContext } from 'react'

export const DataItemContext = createContext({})

export function ContextDataItem() {
    return useContext(DataItemContext)
}

export function DataItem({ children }) {

    const [product, setProduct] = useState()
    const [category, setCategory] = useState()

    const appContextValue = {
        product,
        setProduct,
        category,
        setCategory
    }

    return (
        <DataItemContext value={appContextValue}>
            {children}
        </DataItemContext>
    )

}