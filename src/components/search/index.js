import React, { useState } from 'react';
import {BtnSearch} from '../../components/styled'


const Search = () => {

const[text, setText]=useState('')


function buscar(){

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