import React from 'react'
import {connect} from 'react-redux'

import Button from './Button'

export default class Digits extends React.Component {
    render () {
        return <div className="columns">
            <Button button="=" type="operator" />
        </div>
    }
}