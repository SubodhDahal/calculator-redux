import React from 'react'
import {connect} from 'react-redux'

import Button from './Button'
import {calculateResult} from '../store/actions'

@connect()
export default class Digits extends React.Component {
    constructor (props) {
        super(props)

        this._handleCalculateClick = this._handleCalculateClick.bind(this)
    }

    render () {
        return <div className="columns">
            <Button button="=" type="operator" clickHandler={this._handleCalculateClick} />
        </div>
    }

    _handleCalculateClick (label) {
        const {dispatch} = this.props

        dispatch(calculateResult())

        event.preventDefault()
    }
}