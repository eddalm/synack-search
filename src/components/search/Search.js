import React from 'react'
import { fetchResults } from '../../store/actions/resultActions'
import { connect } from 'react-redux'
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Box } from '@material-ui/core';
import "./Search.css";

function Search(props) {
    let [searchText, setSearchText] = useState("")
    let [searchEngine, setSearchEngine] = useState("google")

    function showSearchResults(e) {
        e.preventDefault()
        console.log({searchText, searchEngine})

        if (!searchText) {
            return;
        }

        props.setLoader(true)
        props.fetchResults({searchText, searchEngine}).then(() => {
            props.setLoader(false);
        })
    }
    return (
        <div>
            <form onSubmit={showSearchResults}>
                <div>
                    <TextField placeholder="Search something..." value={searchText} onChange={(e) => { setSearchText(e.target.value) }} type="text" />
                    <Button variant="contained" color="primary" type="submit">search</Button>
                </div>
                <Select value={searchEngine} onChange={(e) => setSearchEngine(e.target.value)}>
                    <MenuItem value="google">google</MenuItem>
                    <MenuItem value="bing">bing</MenuItem>
                    <MenuItem value="both">both</MenuItem>
                </Select>
            </form>
        </div>
    )
}

export default connect(null, {fetchResults})(Search)