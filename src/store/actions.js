import { SET_DIGIT } from './action-types'
import { SET_DECIMAL_POINT } from './action-types'
import { SET_OPERATOR } from './action-types'
import { CALCULATE_RESULT } from './action-types'
import { CLEAR_ACCUMULATOR } from './action-types'

export const setDigit = number => ({
    type: SET_DIGIT,
    payload: {number}
})

export const setDecimalPoint = () => ({
    type: SET_DECIMAL_POINT
})

export const setOperator = operator => ({
    type: SET_OPERATOR,
    payload: {operator}
})

export const calculateResult = () => ({
    type: CALCULATE_RESULT
})

export const clearAccumulator = () => ({
    type: CLEAR_ACCUMULATOR
})