import React from 'react'

export default class Buttons extends React.Component {
    constructor (props) {
        super(props)

        this.button = props.button
        this.type = props.type
    }

    render () {
        return <div className="column">
            <button className="button calculator-buttons__button" onClick={this._onClick(this.button)}>
                {this.button}
            </button>
        </div>
    }

    _onClick (button) {
        return (event) => {
            event.preventDefault()
            this.props.clickHandler(button)
        }
    }
}