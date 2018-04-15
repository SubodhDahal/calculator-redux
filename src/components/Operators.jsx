import React from 'react'
import {connect} from 'react-redux'

const buttons = [
                ['/'],
                ['*'],
                ['-'],
                ['+']
            ]

export default class Operators extends React.Component {
    render () {
        return <div className="columns">
            <div className="column calculator-buttons">
                { this._renderButtons() }
            </div>
        </div>
    }

    _renderButtons () {
        return buttons.map((buttonRow, i) => {
            return <div className="columns">
                {
                    buttonRow.map((button, j) => {
                        return <div className="column" key={`${i}-{$j}`}>
                            <button className="button calculator-buttons__button">{button}</button>
                        </div>
                    })
                }
            </div>
        })
    }
}