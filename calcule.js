function CalcBMI() {

    var resultado = document.getElementById("resul");
    var peso = document.getElementById("weight").value;
    var altura = document.getElementById("height").value;
    var BMI = peso / (altura*2);

    document.getElementById("result").innerHTML = BMI.toFixed(2);
}