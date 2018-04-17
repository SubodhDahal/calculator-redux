import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        number: state.number
    }
}

@connect(state => state)
export default class Display extends React.Component {
    render () {
        return <div className="columns">
            <div className="column lcd-display">
                {this.props.number}
            </div>
        </div>
    }
}