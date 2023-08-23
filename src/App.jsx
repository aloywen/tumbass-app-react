import { Routes, Route } from 'react-router-dom'

import { Home, Cart, Detailproduct, Navbar } from './components'
import { Category } from './components/pages'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className='mt-16 md:mt-28'></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:key" element={<Category />} />
        <Route path="/detailproduct/:key" element={<Detailproduct />} />
      </Routes>
    </div>
  )
}

export default App
