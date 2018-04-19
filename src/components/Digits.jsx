import React from 'react'
import {connect} from 'react-redux'

import Buttons from './Buttons'
import {clearAccumulator, setDigit, setDecimalPoint} from '../store/actions'

const buttons = [
                [7, 8, 9],
                [4, 5, 6],
                [1, 2, 3],
                ['.', 0, 'C']
            ]

@connect()
export default class Digits extends React.Component {
    constructor (props) {
        super(props)

        this._handleDigitClick = this._handleDigitClick.bind(this)
    }

    render () {
        return <Buttons buttons={buttons} type="digit" clickHandler={this._handleDigitClick} />
    }

    _handleDigitClick(label) {
        const {dispatch} = this.props

        if (label === 'C') {
            dispatch(clearAccumulator())
        } else if (label === '.') {
            dispatch(setDecimalPoint())
        } else {
            dispatch(setDigit(label))
        }
    }
}