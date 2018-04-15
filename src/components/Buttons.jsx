import React from 'react'

import Button from './Button'

export default class Buttons extends React.Component {
    constructor (props) {
        super(props)

        this.buttons = props.buttons
        this.type = props.type
    }

    render () {
        return <div className="columns">
            <div className="column calculator-buttons">
                { this._renderButtons() }
            </div>
        </div>
    }

    _renderButtons () {
        return this.buttons.map((buttonRow, i) => {
            return <div className="columns" key={`${this.type}-${i}`}>
                {
                    buttonRow.map((button, j) => {
                        return <Button button={button} type={this.type} key={`${this.type}-${i}-${j}`} />
                    })
                }
            </div>
        })
    }
}