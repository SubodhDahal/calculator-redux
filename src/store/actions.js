import { SET_DIGIT } from './action-types'

export const setDigit = number => ({
    type: SET_DIGIT,
    payload: {number}
})