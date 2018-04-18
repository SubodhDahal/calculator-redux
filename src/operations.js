export default function performOperation(accumulator, rhs) {
    const lhs = parseFloat(accumulator.number)
    rhs = parseFloat(rhs)

    switch (accumulator.operator) {
        case '+':
            return lhs + rhs
        case '-':
            return lhs - rhs
        case '*':
            return lhs * rhs
        case '/':
            return lhs / rhs
    }

    throw `Error: Invalid operator ${accumulator.operator}`
}
