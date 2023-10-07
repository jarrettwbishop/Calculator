const display = document.getElementById("display")
let numOne = 0;
let numTwo = 0;
let operation;

const Add = function() {
    operation = "+"
    numOne = display.textContent
    Operate(numOne,numTwo,operation)
}

const Subtract = function() {
    operation = "-"
}

const Multiply = function() {
    operation = "*"
}

const Divide = function() {
    operation = "/"
}

const Equals = function() {

}

const Operate = function(a,b,operator) {
    switch(operator) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
    }
}

const Clear = function() {
    display.textContent = 0;
}

const Delete = function() {
    let updated = display.textContent.split("")
    updated.pop()
    display.textContent = updated.join("")
}

const One = function() {
    let updated = display.textContent.split("")
    if (updated[0] > 0) {
        updated.push("1")
        display.textContent = updated.join("")
        
    } else {
        display.textContent = 1
        
    }
}

const Two = function() {
    let updated = display.textContent.split("")
    if (updated[0] > 0) {
        updated.push("2")
        display.textContent = updated.join("")
        
    } else {
        display.textContent = 2
        
    }
}

const Three = function() {
    let updated = display.textContent.split("")
    if (updated[0] > 0) {
        updated.push("3")
        display.textContent = updated.join("")
        
    } else {
        display.textContent = 3
        
    }
}

const Four = function() {
    let updated = display.textContent.split("")
    if (updated[0] > 0) {
        updated.push("4")
        display.textContent = updated.join("")
        
    } else {
        display.textContent = 4
        
    }
}

const Five = function() {
    let updated = display.textContent.split("")
    if (updated[0] > 0) {
        updated.push("5")
        display.textContent = updated.join("")
        
    } else {
        display.textContent = 5
        
    }
}

const Six = function() {
    let updated = display.textContent.split("")
    if (updated[0] > 0) {
        updated.push("6")
        display.textContent = updated.join("")
        
    } else {
        display.textContent = 6
        
    }
}

const Seven = function() {
    let updated = display.textContent.split("")
    if (updated[0] > 0) {
        updated.push("7")
        display.textContent = updated.join("")
        
    } else {
        display.textContent = 7
        
    }
}

const Eight = function() {
    let updated = display.textContent.split("")
    if (updated[0] > 0) {
        updated.push("8")
        display.textContent = updated.join("")
        
    } else {
        display.textContent = 8
        
    }
}

const Nine = function() {
    let updated = display.textContent.split("")
    if (updated[0] > 0) {
        updated.push("9")
        display.textContent = updated.join("")
        
    } else {
        display.textContent = 9
        
    }
}

const Zero = function() {
    let updated = display.textContent.split("")
    if (updated[0] > 0) {
        updated.push("0")
        display.textContent = updated.join("")
        
    } else {
        display.textContent = 0
        
    }
}

