function saiaKalk() {
    let k = document.getElementById("kogus");
    let vastus = document.getElementById("vastus");
    const juustuHind = 1.20;
    const mooniHind = 1.20;
    const ponstikHind = 2.00;
    const kaneeliHind = 1.50;

    let saiatyyp = document.getElementById("saiatyyp");

    if (saiatyyp.selectedIndex === 0) {
        vastus.innerHTML = "Palun vali saia tüüp!";
        vastus.style.backgroundColor = "red";
    }
    if (saiatyyp.selectedIndex === 1) {
        vastus.innerHTML = juustuHind * k.value + '€';
    }
    if (saiatyyp.selectedIndex === 2) {
        vastus.innerHTML = mooniHind * k.value + '€';
    }
    if (saiatyyp.selectedIndex === 4) {
        vastus.innerHTML = ponstikHind * k.value + '€';
    }
    if (saiatyyp.selectedIndex === 3) {
        vastus.innerHTML = kaneeliHind * k.value + '€';
    }
}

function juhuslikPilt() {
    const pildid = [
        'pildid/pilt1.png',
        'pildid/pilt2.png',
        'pildid/pilt3.png'
    ];
    const juhuslikPilt = Math.floor(Math.random() * pildid.length);

    const pilt = pildid[juhuslikPilt];
    const rpilt = document.getElementById("random-pilt");
    rpilt.src = pilt;
}

function radioKontroll() {
    let vastus2 = document.getElementById("vastus2");
    const rpilt = document.getElementById("random-pilt");
    const valik = document.getElementsByName("valik"); // mitu elementi
    for (let i = 0; i < valik.length; i++) {
        if (valik[i].checked) {
            if (valik[i].value === rpilt.getAttribute("src")) {
                vastus2.innerHTML = "Õige valik";
                vastus2.style.color = "green";
                console.log(valik[i].value);
            } else {
                vastus2.innerHTML = "Vale vastus";
                vastus2.style.color = "red";
                console.log(valik[i].value);
            }
        }
    }
}

function Temperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const susteemElement = document.getElementById("susteem");


    const susteem = susteemElement.value;
    const result1 = document.getElementById("result");

    let temperature = parseFloat(temperatureInput);
    let result;



    if (susteem === "C") {
        result = (temperature * 9 / 5) + 32;
        result1.innerHTML = temperature.toFixed(2) + "°C = " + result.toFixed(2) + "°F";
    } else if (susteem === "F") {
        result = (temperature - 32) * 5 / 9;
        result1.innerHTML = temperature.toFixed(2) + "°F = " + result.toFixed(2) + "°C";
    } else {
        result1.innerHTML = "Palun valige kehtiv süsteem!";
        result1.style.color = "red";
    }
}

function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    const bmiResult = document.getElementById("bmiResult");

    const bmi = weight / (height * height);
    let category;
    let color;

    if (bmi < 5) {
        category = "sisestage õige väärtus";
        color = "black";
    }
    else if (bmi < 18.5) {
        category = "Alakaaluline";
        color = "blue";
    } else if (bmi < 24.9) {
        category = "Norma";
        color = "green";
    } else if (bmi < 29.9) {
        category = "Ülekaaluline";
        color = "orange";
    } else if (bmi < 49.9) {
        category = "Rasvumine";
        color = "red";
    } else {
        category = "sisestage õige väärtus";
        color = "black";
    }

    bmiResult.innerHTML = "BMI: " + bmi.toFixed(2) + " - " + category;
    bmiResult.style.color = color;
}
