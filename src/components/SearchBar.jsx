import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  const [query, setQuery] = useState("")
  return (
    <div className='flex flex-row border border-gray-400 rounded-lg px-3 py-1 items-center gap-3'>
      <CiSearch className='text-black size-4' />
      <input type="text" placeholder='Freeship đơn từ 45k'
        className='flex-1 focus:outline-none'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        <button className='text-blue-500 bg-white pl-3 border-l border-gray-300'>Tìm kiếm</button>
      </div>
    </div>
  )
}

export default SearchBar
