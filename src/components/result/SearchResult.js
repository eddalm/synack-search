import React from 'react'
import Search from '../search/Search'
import Result from './Result'
import { Container } from '@material-ui/core'
import CircularIndeterminate from '../../loader/Loader';
import { useState } from 'react';
import mainlogo from "./search-logo.png";
import "./SearchResult.css";

export default function SearchResult() {
    const [loader, setLoader] = useState(false)
    return (
        <Container maxWidth="sm">
            <img className={"main-logo"} src={mainlogo}/>
            <div className={"search-form"} >
                <Search loader={loader} setLoader={setLoader}></Search>
            </div>
            {loader ? <CircularIndeterminate/> : <div></div>}
            {!loader? <Result></Result> : <div></div>}
        </Container>
    )
}
