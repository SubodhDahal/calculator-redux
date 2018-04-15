import React from 'react'
import {connect} from 'react-redux'

import Buttons from './Buttons'

const buttons = [
                [7, 8, 9],
                [4, 5, 6],
                [1, 2, 3],
                ['.', 0, 'C']
            ]

export default class Digits extends React.Component {
    render () {
        return <Buttons buttons={buttons} type="digit" />
    }
}