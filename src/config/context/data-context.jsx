import { useState, useContext, createContext } from 'react'

export const DataCartContext = createContext({}) // init context

// Jadikan init menjadi context
export function ContextDataCart() {
  return useContext(DataCartContext)
}


export function DataCart({ children }) {
  const [data, setData] = useState({
    totalCart: 0,
    cart: [
      {
        title: '',
        image: '',
        qty: '',
        price: '',
        checked: '',
        notes: ''
      }
    ],
  })

  const appContextValue = {
    data,
    setData
  }

  // console.log(data);

  return (
    <DataCartContext.Provider value={appContextValue}>
      {children}
    </DataCartContext.Provider>
  )
}
