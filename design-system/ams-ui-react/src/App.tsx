/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, memo, useCallback, useEffect, useState, useDeferredValue, Suspense } from 'react'
import './App.css'

interface ProductProps {
  limit: number
  products: any[]
  skip: number
  total: number
}

const initProduct: ProductProps = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0
}

const Child = ({ query, onClick }: any) => {
  const [product, setProduct] = useState<ProductProps>(initProduct)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setProduct(json)
      })
  }, [query])

  console.log('Child Render')

  return (
    <div>
      Child
      <button className='border p-2' onClick={onClick}>
        Count
      </button>
      <ul>
        {product.total ? product.products.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        )) : <li>No Data</li>}
      </ul>
    </div>
  )
}
const ChildMemo = memo(Child)

function App() {
  const [query, setQuery] = useState('')
  const search = useDeferredValue(query)
  const [count, setCount] = useState(0)
  const handleCount = useCallback(() => setCount((count) => count + 1), [])

  const handleQuery = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  console.log('Parent Render')

  return (
    <>
      <button className='border p-2' onClick={handleCount}>
        Count is {count}
      </button>
      <input className='border p-2 block w-full' type='text' value={query} onChange={handleQuery} />
      <Suspense fallback={<h2>Loading...</h2>}>
        <ChildMemo query={search} onClick={handleCount} />
      </Suspense>
    </>
  )
}

export default App
