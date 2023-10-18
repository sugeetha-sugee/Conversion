function calculator() {
    let massvalue = Number(document.getElementById("input").value);
    let heightvalue = Number(document.getElementById("input2").value);
    let BMIvalue = massvalue / heightvalue ** 2;
    let calculator = document.getElementById("result");
    calculator.innerHTML = BMIvalue.toFixed(2); 
}