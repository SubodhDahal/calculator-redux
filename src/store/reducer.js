import { SET_DIGIT } from './action-types'
import { SET_DECIMAL_POINT } from './action-types'
import { SET_OPERATOR } from './action-types'
import { CALCULATE_RESULT } from './action-types'
import { CLEAR_ACCUMULATOR } from './action-types'

import performOperation from '../operations'

const initialNumber = '0'

const initialState = () => ({
    number: '0',
    accumulator: {
        number: null,
        operator: null
    }
})

function setDigitReducer(state, payload) {
    const previousNumber = state.number

    const number = previousNumber === initialNumber
        ? `${payload.number}`
        : `${previousNumber}${payload.number}`

    return {...state, number}
}

function setDecimalPointReducer(state) {
    const previousNumber = state.number

    let number = previousNumber.indexOf('.') !== -1
        ? previousNumber
        :  `${previousNumber}.`

    return {...state, number}
}

function setOperatorReducer(state, payload) {
    const operator = payload.operator

    const {accumulator, number} = state

    const result = accumulator.operator
        ? performOperation(accumulator, number)
        : number

    const newAccumulator = Object.assign({}, accumulator, {
        number: result,
        operator: operator,
    });

    return {
        ...state,
        accumulator: newAccumulator,
        number: initialNumber,
    }
}

function calculateResultReducer(state) {
    const accumulator = state.number
    const number = performOperation(state.accumulator, state.number, state.operator)

    return {...state, number, accumulator}
}

function clearAccumulatorReducer(state) {
   const newAccumulator = Object.assign({}, state.accumulator, {
        number: null,
        operator: null,
    });

    return {
        ...state,
        accumulator: newAccumulator,
        number: initialNumber,
    }
}

export default function reducer(state = initialState(), action) {
    const {type, payload} = action

    switch (type) {
        case SET_DIGIT:
            return setDigitReducer(state, payload)

        case SET_DECIMAL_POINT:
            return setDecimalPointReducer(state)

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
