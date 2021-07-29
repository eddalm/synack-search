import React from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../../store/actions/resultActions'
import { Link, List } from '@material-ui/core'
import "./Result.css";

function Result(props) {

    console.log('props', props.results)
    return (
        <List>
            {props.results.result.map((result, index) => {
                return (
                    <div className={"result-item"} data-testid={"result-list-item"} key={index}>
                        <div>
                            <Link href={result.link}>{result.title}</Link>
                        </div>
                        <span className={"description"}>{result.snippet}</span>
                    </div>
                )
            })}
        </List>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.result
    }
}

export default connect(mapStateToProps, {fetchResults})(Result)