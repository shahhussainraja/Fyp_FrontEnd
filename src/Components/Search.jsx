import React from "react"
import { FiSearch } from "react-icons/fi";



const Search = () => {

  return (
    <>
      <section className='search'>
          <div>
            <input className="search-box input" type='text' placeholder='Search and hit enter...'/>
            {/* <FiSearch className="search-box i"></FiSearch> */}
          </div>
      </section>
    </>
  )
}

export default Search
