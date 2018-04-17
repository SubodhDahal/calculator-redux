import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import store from './store/index'

import 'bulma/css/bulma.css'
import './style.css'

import App from './components/App'

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    document.getElementById('main'))
