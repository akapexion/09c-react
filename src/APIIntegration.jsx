import React, { useEffect, useState } from 'react'

const APIIntegration = () => {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProductsAPI = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=12")
      const json = await res.json()
      setData(json.products)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProductsAPI()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">

      {/* Controls */}
      <div className="flex flex-wrap items-end gap-8 mb-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Counter</p>
          <div className="flex items-center gap-3">
            <span className="bg-gray-100 rounded-lg px-5 py-2 text-2xl font-semibold">{count}</span>
            <button
              onClick={() => setCount(c => c + 1)}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700"
            >
              + Add
            </button>
            <button
              onClick={() => setCount(0)}
              className="border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
            >
              Reset
            </button>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Toggle</p>
          <button
            onClick={() => setToggle(t => !t)}
            className={`px-5 py-2 rounded-lg text-sm font-medium border transition-colors ${
              toggle
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {toggle ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {toggle && (
        <div className="mb-4 px-4 py-3 bg-gray-50 rounded-lg border-l-4 border-gray-900 text-sm text-gray-600">
          Toggle is active — show your content here.
        </div>
      )}

      <hr className="border-gray-100 mb-6" />

      {/* Products Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-xs uppercase tracking-widest text-gray-400">Products</p>
        {!loading && <span className="text-xs text-gray-400">{data.length} items</span>}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-gray-100 p-3 animate-pulse">
                <div className="h-28 bg-gray-100 rounded-lg mb-3" />
                <div className="h-3 bg-gray-100 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
              </div>
            ))
          : data.map(d => (
              <div key={d.id} className="rounded-xl border border-gray-100 p-3 hover:border-gray-300 transition-colors">
                <img
                  src={d.thumbnail}
                  alt={d.title}
                  className="w-full h-28 object-contain bg-gray-50 rounded-lg p-2 mb-3"
                />
                <p className="text-sm font-medium leading-snug">{d.title}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{d.category}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm font-semibold">${d.price.toFixed(2)}</span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    ★ {d.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default APIIntegration