import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Input from 'react-widgets/cjs/Input';
import { FaSearch} from 'react-icons/fa';
import { useEffect , useState} from 'react';

import './Search.css'
import productData from './context';

const getFilteredItems = (query, items) =>{
  if(!query){
    return items;
  }
  return items.filter(category=>category.name.includes(query))
}

const Search = (props) => {

  const [query, setQuery] = useState("");

  // const {tracks} = productData;
  // const{items} = tracks;

  // const filteredItems = getFilteredItems(query, items)

  return (
    <div className='search_comp'>
        
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              // onChange={e=>setQuery(e.target.value)}
              // aria-label="Search"
            />
            {/* {filteredItems.map((value)=>(
                    <h5>{props.category}</h5>))} */}
           {/* <FaSearch className='Search__search'/> */}
             {/* <Button className='search-btn'>Search</Button>
            */}
        
                                       
                                     
    </div>
  )
}

export default Search
 