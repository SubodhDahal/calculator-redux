export default function performOperation(lhs, rhs, operator) {
    lhs = parseFloat(lhs)
    rhs = parseFloat(rhs)

    switch (operator) {
        case '+':
            return lhs + rhs
        case '-':
            return lhs - rhs
        case '*':
            return lhs * rhs
        case '/':
            return lhs / rhs
    }

    throw `invalid operator ${operator}`
}
