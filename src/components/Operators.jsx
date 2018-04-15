import React from 'react'
import {connect} from 'react-redux'

import Buttons from './Buttons'

const buttons = [
                ['/'],
                ['*'],
                ['-'],
                ['+']
            ]

export default class Operators extends React.Component {
    render () {
        return <Buttons buttons={buttons} type="operator" />
    }
}