import React from 'react'
import {connect} from 'react-redux'

import Buttons from './Buttons'
import {setOperator} from '../store/actions'

const buttons = [
                ['/'],
                ['*'],
                ['-'],
                ['+']
            ]

@connect()
export default class Operators extends React.Component {
    constructor (props) {
        super(props)

        this._handleOperatorClick = this._handleOperatorClick.bind(this)
    }

    render () {
        return <Buttons buttons={buttons} type="operator"  clickHandler={this._handleOperatorClick} />
    }

    _handleOperatorClick(label) {
        const {dispatch} = this.props

        dispatch(setOperator(label))

        event.preventDefault()
    }
}