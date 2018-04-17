import { SET_DIGIT } from './action-types'
import { SET_OPERATOR } from './action-types'

export const setDigit = number => ({
    type: SET_DIGIT,
    payload: {number}
})

export const setOperator = operator => ({
    type: SET_OPERATOR,
    payload: {operator}
})