import { SET_DIGIT } from './action-types'

const initialState = () => ({
    number: 0,
    accumulator: null
})

function setDigitReducer(state, payload) {
    const number = state.number * 10 + payload.number
    return {...state, number}
}

export default function reducer(state = initialState(), action) {
    const {type, payload} = action

    switch (type) {
        case SET_DIGIT:
            return setDigitReducer(state, payload)

        default:
            return state
    }
}
