import { SET_DIGIT } from './action-types'
import { SET_OPERATOR } from './action-types'
import { CALCULATE_RESULT } from './action-types'
import { CLEAR_ACCUMULATOR } from './action-types'

import performOperation from '../operations'

const initialState = () => ({
    number: 0,
    accumulator: null,
    operator: null
})

function setDigitReducer(state, payload) {
    const number = state.number * 10 + payload.number
    return {...state, number}
}

function setOperatorReducer(state, payload) {
    const operator = payload.operator
    const accumulator = state.number
    const number = 0

    return {...state, number, accumulator, operator}
}

function calculateResultReducer(state) {
    const accumulator = state.number
    const number = performOperation(state.accumulator, state.number, state.operator)

    return {...state, number, accumulator}
}

function clearAccumulatorReducer(state) {
    const operator = null
    const accumulator = null
    const number = 0

    return {...state, number, accumulator, operator}
}

export default function reducer(state = initialState(), action) {
    const {type, payload} = action

    switch (type) {
        case SET_DIGIT:
            return setDigitReducer(state, payload)

        case SET_OPERATOR:
            return setOperatorReducer(state, payload)

        case CALCULATE_RESULT:
            return calculateResultReducer(state)

        case CLEAR_ACCUMULATOR:
            return clearAccumulatorReducer(state)

        default:
            return state
    }
}
