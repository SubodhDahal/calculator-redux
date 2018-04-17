import { createStore } from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import reducer from './reducer'

import {setDigit} from './actions'
const store = createStore(reducer, devToolsEnhancer())

export default store