function convert() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const number = document.getElementById("number").value;

    const rates = {
        usd:{usd:1,eur:0.85,uah:39.5},
        eur:{usd:1.18,eur:1,uah:50},
        uah:{usd:0.025,eur:0.02,uah:1}
    };
    const result = (number * rates[from][to]);
    document.getElementById("result").innerHTML = number + " " + from + " = " + result + " " + to;

}
