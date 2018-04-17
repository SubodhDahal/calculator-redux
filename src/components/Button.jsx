import React from 'react'
import {connect} from 'react-redux'

import {setDigit} from '../store/actions'

@connect()
export default class Buttons extends React.Component {
    constructor (props) {
        super(props)

        this.button = props.button
        this.type = props.type

        this.handleButtonClicked = label => event => {
            const {dispatch} = this.props

            dispatch(setDigit(label))

            event.preventDefault()
        }
    }

    render () {
        return <div className="column">
            <button className="button calculator-buttons__button" onClick={this.handleButtonClicked(this.button)}>
                {this.button}
            </button>
        </div>
    }
}