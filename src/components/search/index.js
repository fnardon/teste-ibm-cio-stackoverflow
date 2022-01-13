import React, { useState } from 'react';
import {BtnSearch} from '../../components/styled'
import getSearch from '../../apis'


const Search = () => {

const[text, setText]=useState('')


function buscar(){

    getSearch()
     .then(res => {
      console.log(res)

     })
     .catch(err => {
       console.log('getSearch error: ', err)
     })


    console.log(text)

    
}

    return (
        <div className='form-imput'>
        <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
        <BtnSearch onClick={buscar}>Buscar</BtnSearch>
        </div>

    );

}
export default Search;