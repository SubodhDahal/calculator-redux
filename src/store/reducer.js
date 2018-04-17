import { SET_DIGIT } from './action-types'
import { SET_OPERATOR } from './action-types'

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

export default function reducer(state = initialState(), action) {
    const {type, payload} = action

    switch (type) {
        case SET_DIGIT:
            return setDigitReducer(state, payload)

        case SET_OPERATOR:
            return setOperatorReducer(state, payload)

        default:
            return state
    }
}
