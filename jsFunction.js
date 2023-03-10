var currency = 0;
var indianRupeeSymbol = "₹";
var currencyList = [
    { country: "India", currencyType: "Rupee", symbol: "₹", amount: 1.00, rate: 1.00 },
    { country: "USA", currencyType: "Dollar", symbol: "$", amount: 1.00, rate: 72.816 },
    { country: "Pakistan", currencyType: "Rupee", symbol: "Rs", amount: 1.00, rate: 0.456 },
    { country: "Dubai", currencyType: "Dihram", symbol: "_", amount: 1.00, rate: 19.823 },
    { country: "Saudi", currencyType: "Riyal", symbol: "_", amount: 1.00, rate: 88.232 },
    { country: "China", currencyType: "Yuan", symbol: "¥", amount: 1.00, rate: 11.282 },
    { country: "Japan", currencyType: "Yen", symbol: "¥", amount: 1.00, rate: 0.695 },
    { country: "Canada", currencyType: "Dollar", symbol: "C$", amount: 1.00, rate: 57.328 }
];

function currencyCalculator() {
    currency = document.getElementById("indianRupee").value; //2

    if (currency.length == 0) {
        document.getElementById("inputError").innerHTML = "Please provide a value";
    }

    console.log(currency);
    displayCurrency(currency);

    return false;
}

function displayCurrency(amount) {
    // var ind = 1 * currency;
    // var usa = 0.014 * currency;
    // var uk = 0.0100 * currency;
    // var dubai = 0.050 * currency;

    // document.getElementById("indianRupees").innerHTML = ind;
    // document.getElementById("usaDollar").innerHTML = usa;
    // document.getElementById("ukPounds").innerHTML = uk;
    // document.getElementById("dubai").innerHTML = dubai;

    var count = 1;
    var k = '<tbody>'
    for (var i = 0; i < currencyList.length; i++) {

        var value = (amount / currencyList[i].rate);
        var valueToString = value.toString();
        var calculatedAmount = valueToString.substring(0, 6);

        k += '<tr>';
        k += '<td>' + count++ + '</td>';
        k += '<td>' + currencyList[i].country + '</td>';
        k += '<td>' + '<b>' + currencyList[i].symbol + '</b>' + " " + currencyList[i].currencyType + '</td>';
        k += '<td>' + calculatedAmount + '</td>';
        k += '</tr>';
    }
    k += '</tbody>';
    document.getElementById("currencyCalculatorTable").innerHTML = k;
}



function currencyArray() {
    for (let index = 0; index < currencyList.length; index++) {
        const element = currencyList[index];
        console.log(currencyList[index].country + ", " + currencyList[index].currencyType + ", " + currencyList[index].symbol + ", " + currencyList[index].amount + ", " + currencyList[index].rate);
    }

    var count = 1;
    var k = '<tbody>'
    for (var i = 0; i < currencyList.length; i++) {
        k += '<tr>';
        k += '<td>' + count++ + '</td>';
        k += '<td>' + currencyList[i].country + '</td>';
        k += '<td>' + '<b>' + currencyList[i].symbol + '</b>' + " " + currencyList[i].currencyType + '</td>';
        k += '<td>' + '<b>' + indianRupeeSymbol + '</b>' + " " + currencyList[i].amount + ".00" + '</td>';
        k += '<td>' + currencyList[i].rate + '</td>';
        k += '</tr>';
    }
    k += '</tbody>';
    document.getElementById("countryList").innerHTML = k;

}

currencyArray();
