const display = document.getElementById("display")

let displayValue = 0;

let valOne = 0;
let valTwo = 0;
let operation;

const Add = function() {
    operation = "+"
    valOne > 0 ? valTwo = displayValue : valOne = displayValue
    valOne = Operate(valOne,valTwo,operation)
    valTwo = 0;
    displayValue = 0;    
}

const Subtract = function() {
    operation = "-"
    valOne = Operate(valOne,displayValue,operation)
}

const Multiply = function() {
    operation = "*"
}

const Divide = function() {
    operation = "/"
}

const Equals = function() {
    valOne = Operate(valOne,displayValue,operation)
    displayValue = 0;
}

const Operate = function(a,b,operator) {
    switch(operator) {
        case "+":
            return display.textContent = Number(a) + Number(b)
        case "-":
            return display.textContent = Number(a) - Number(b)
        case "*":
            break;
        case "/":
            break;
    }
}

const Clear = function() {
    displayValue = 0;
    valOne = 0;
    valTwo = 0;
    display.textContent = displayValue;
    
}

const Delete = function() {
    let updated = display.textContent.split("")
    updated.pop()
    display.textContent = updated.join("")
}

const One = function() {
    if (displayValue == 0) {
        displayValue = 1
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        temp.push("1")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Two = function() {
    if (displayValue == 0) {
        displayValue = 2
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        temp.push("2")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Three = function() {
    if (displayValue == 0) {
        displayValue = 3
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        temp.push("3")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Four = function() {
    if (displayValue == 0) {
        displayValue = 4
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        temp.push("4")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Five = function() {
    if (displayValue == 0) {
        displayValue = 5
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        temp.push("5")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Six = function() {
    if (displayValue == 0) {
        displayValue = 6
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        temp.push("6")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Seven = function() {
    if (displayValue == 0) {
        displayValue = 7
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        temp.push("7")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Eight = function() {
    if (displayValue == 0) {
        displayValue = 8
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        temp.push("8")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Nine = function() {
    if (displayValue == 0) {
        displayValue = 9
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        temp.push("9")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Zero = function() {
    if (displayValue == 0) {
        displayValue = 0
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        temp.push("0")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

