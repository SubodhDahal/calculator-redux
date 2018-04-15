import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import 'bulma/css/bulma.css'
import './style.css'
import App from './components/App'

const store = createStore(
    reducer,
    devToolsEnhancer())

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    document.getElementById('main'))
