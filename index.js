const display = document.getElementById("display")

let displayValue = 0;

let valOne = 0;
let valTwo = 0;
let operation;

const Add = function() { 
    if( valOne > 0 && displayValue > 0) {
        valOne > 0 ? valTwo = displayValue : valOne = displayValue
        valOne = Operate(valOne,valTwo,operation)
        operation = "+"
        valTwo = 0;
        displayValue = 0;
    } else {
    operation = "+"
    valOne > 0 ? valTwo = displayValue : valOne = displayValue
    valOne = Operate(valOne,valTwo,operation)
    valTwo = 0;
    displayValue = 0;  
    }
}

const Subtract = function() {
    if( valOne > 0 && displayValue > 0) {
        valOne > 0 ? valTwo = displayValue : valOne = displayValue
        valOne = Operate(valOne,valTwo,operation)
        operation = "-"
        valTwo = 0;
        displayValue = 0;
    } else {
    operation = "-"
    valOne > 0 ? valTwo = displayValue : valOne = displayValue
    valOne = Operate(valOne,valTwo,operation)
    valTwo = 0;
    displayValue = 0;
    }
}

const Multiply = function() {
    if( valOne > 0 && displayValue > 0) {
        valOne > 0 ? valTwo = displayValue : valOne = displayValue
        valOne = Operate(valOne,valTwo,operation)
        operation = "*"
        valTwo = 0;
        displayValue = 0;
    } else {
    operation = "*"
    valOne > 0 ? valTwo = displayValue : valOne = displayValue
    if (valTwo > 0 || valTwo < 0) {
        valOne = Operate(valOne,valTwo,operation)
    }
    valTwo = 0;
    displayValue = 0;
    }
}

const Divide = function() {
    if( valOne > 0 && displayValue > 0) {
        valOne > 0 ? valTwo = displayValue : valOne = displayValue
        valOne = Operate(valOne,valTwo,operation)
        operation = "/"
        valTwo = 0;
        displayValue = 0;
    } else {
    operation = "/"
    valOne > 0 ? valTwo = displayValue : valOne = displayValue
    if (valTwo > 0 || valTwo < 0) {
        valOne = Operate(valOne,valTwo,operation)
    }
    valTwo = 0;
    displayValue = 0;
    }
}

const Equals = function() {
    if(valOne > 0) {
        valOne = Operate(valOne,displayValue,operation)
        displayValue = 0;
    } 
}

const Operate = function(a,b,operator) {
    let result;
    let decimalPlaces;
    let decimalMath = "1";
    switch(operator) {
        case "+":
            result = Number(a) + Number(b)
            decimalPlaces = 9 - result.toString().split("").slice(0, result.toString().split("").lastIndexOf(".")).length
            for (let i = 0; i < decimalPlaces; i++) {
                decimalMath += "0";
            }
            result = Math.round(result * decimalMath) / decimalMath
            return display.textContent = result
        case "-":
            result = Number(a) - Number(b)
            decimalPlaces = 9 - result.toString().split("").slice(0, result.toString().split("").lastIndexOf(".")).length
            for (let i = 0; i < decimalPlaces; i++) {
                decimalMath += "0";
            }
            result = Math.round(result * decimalMath) / decimalMath
            return display.textContent = result
        case "*":
            result = Number(a) * Number(b)
            decimalPlaces = 9 - result.toString().split("").slice(0, result.toString().split("").lastIndexOf(".")).length
            for (let i = 0; i < decimalPlaces; i++) {
                decimalMath += "0";
            }
            result = Math.round(result * decimalMath) / decimalMath
            return display.textContent = result
        case "/":
            if (b != 0) {
                result = Number(a) / Number(b)
                decimalPlaces = 9 - result.toString().split("").slice(0, result.toString().split("").lastIndexOf(".")).length
                for (let i = 0; i < decimalPlaces; i++) {
                    decimalMath += "0";
                    console.log(decimalMath)
                }
                console.log(decimalMath)
                result = Math.round(result * decimalMath) / decimalMath
                return display.textContent = result
            }
            return display.textContent = "Error"
            
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
    console.log(updated.length)
    if (updated.length == 1) {
        display.textContent = 0
        return;
    }
    updated.pop()
    display.textContent = updated.join("")

}

const One = function() {
    if (displayValue == 0) {
        displayValue = 1
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.length < 9) temp.push("1")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Two = function() {
    if (displayValue === 0) {
        displayValue = 2
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.length < 9) temp.push("2")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Three = function() {
    if (displayValue === 0) {
        displayValue = 3
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.length < 9) temp.push("3")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Four = function() {
    if (displayValue === 0) {
        displayValue = 4
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.length < 9) temp.push("4")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Five = function() {
    if (displayValue === 0) {
        displayValue = 5
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.length < 9) temp.push("5")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Six = function() {
    if (displayValue === 0) {
        displayValue = 6
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.length < 9) temp.push("6")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Seven = function() {
    if (displayValue === 0) {
        displayValue = 7
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.length < 9) temp.push("7")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Eight = function() {
    if (displayValue === 0) {
        displayValue = 8
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.length < 9) temp.push("8")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Nine = function() {
    if (displayValue === 0) {
        displayValue = 9
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.length < 9) temp.push("9")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Zero = function() {
    if (displayValue === 0) {
        displayValue = 0
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.length < 9) temp.push("0")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}

const Dot = function() {
    if (displayValue === 0) {
        displayValue = "0."
        display.textContent = displayValue
    } else {
        let temp = displayValue.toString().split("")
        if (temp.includes(".")) return;
        if (temp.length < 8) temp.push(".")
        displayValue = temp.join("")
        display.textContent = displayValue

    }
}




const Pressed = function() {
    addEventListener
}