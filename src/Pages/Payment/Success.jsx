import React from 'react'
import styled from 'styled-components'
import "./Success.css"

let container = styled.div`
    display:flex;
    height: 50vh;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    color: green;
    background-color: yellow;

`


function Success() {
  return (
    <div className="containerSuccess">
         Payment done Successfully
    </div>
  )
}

export default Success