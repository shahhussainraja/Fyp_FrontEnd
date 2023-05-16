import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Input from 'react-widgets/cjs/Input';
import { useEffect , useState} from 'react';

import './Search.css'

const Search = (props) => {

  return (
    <div className='search_comp'>
        <form className='search-form'>
            <input type='search' placeholder='search here'/>
            <button type='submit'>Send</button>
        </form>                                            
    </div>
  )
}

export default Search
 