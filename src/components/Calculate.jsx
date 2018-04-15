import React from 'react'
import {connect} from 'react-redux'

export default class Digits extends React.Component {
    render () {
        return <div className="columns">
            <div className="column">
                <button className="button calculator-buttons__button is-primary">=</button>
            </div>
        </div>
    }
}