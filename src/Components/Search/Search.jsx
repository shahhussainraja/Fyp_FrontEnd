import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Input from 'react-widgets/cjs/Input';
import { FaSearch} from 'react-icons/fa';

import './Search.css'

const Search = () => {
 

  return (
    <div className='search_comp'>
        <FaSearch className='Search__search'/>
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              // aria-label="Search"
            />
           
             {/* <Button className='search-btn'>Search</Button>
            */}
        
                                       
                                     
    </div>
  )
}

export default Search
 