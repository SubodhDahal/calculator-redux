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
                <div className="is-pulled-right lcd-display__aux">
                    {this.props.accumulator}
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