import React from 'react'

import Digits from './Digits'
import Display from './Display'
import Operators from './Operators'
import Calculate from './Calculate'

export default class App extends React.Component {
    render() {
        return <div className="container">
            <div className="columns">
                <div className="column is-one-third">
                    <div className="card">
                        <div className="card-content">
                            <Display />

                            <div className="columns">
                                <div className="column">
                                    <Digits />
                                </div>

                                <div className="column is-3">
                                    <Operators />
                                </div>
                            </div>

                            <Calculate />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
