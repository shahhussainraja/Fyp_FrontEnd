import React from "react"
import { FiSearch } from "react-icons/fi";



const Search = () => {

  return (
    <>
    <section className="search">
      <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>
      </section>
    </>
  )
}

export default Search
