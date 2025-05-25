function value(numberOne, operater, numberTow) {
    var result;
    if (operater === "*") {
        result = numberOne * numberTow
    }
    else if (operater === "+") {
        result = numberOne + numberTow
    }
    else if (operater === "/") {
        result = numberOne / numberTow
    }
    else if (operater === "-") {
        result = numberOne - numberTow
    }
    else {
        return result = "invaild operater"
    }
    return result

}
console.log(value(30, "*", 30))
console.log(value(30, "-", 30))
console.log(value(30, "+", 30))
console.log(value(30, "/", 30))