import React from 'react'
import {connect} from 'react-redux'

@connect(state => state)
export default class Display extends React.Component {
    render () {
        return <div className="columns">
            <div className="column lcd-display">
                <div className="is-pulled-right lcd-display__aux">
                    {this.props.accumulator} {this.props.operator}
                </div>
                <div className="is-clearfix"></div>

                <div className="is-pulled-right lcd-display__main">
                    {this.props.number}
                </div>
                <div className="is-clearfix"></div>
            </div>
        </div>
    }
}