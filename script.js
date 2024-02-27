const display1 = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialSymbols = ["%", "*", "/", "+", "-"];

let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "C") {
        output = "";
    } else {
        if (output === "" && specialSymbols.includes(btnValue)) return;
        output += btnValue;
    }
    display1.value = output; // Corrected assignment
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
