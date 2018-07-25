let fs = require('fs');

let exchange = process.argv[2];
let amount = process.argv[3];

//read bank.text for total
switch (exchange) {
    case "total":
        fs.readFile("bank.txt", "utf8", function (error, data) {
            if (error !== null) {
                console.log(error);
            }
            console.log(data);
            let total = 0;
            let numbs = data.split(",");
            for (let n of numbs) {
                total += parseFloat(n);
            }
            return console.log("Your total is " + total);
        });
        break;
    case "deposit":
        fs.appendFile("bank.txt", ", " + amount, function (error) {
            if (error !== null) {
                console.log(error);
            }
            return console.log('You have suceessfully deposited' + amount)
        });
        break;
    case "withdraw":
        fs.appendFile("bank.txt", ", -" + amount, function (error) {
            if (error !== null) {
                console.log(error);
            }
            return console.log('You have suceessfully withdrawn ' + amount)
        });
        break;
        case "lotto":
        if((Math.floor(Math.random() * (1000 - 1)) + 1)===1){
            fs.appendFile("bank.txt", ", " + 6000, function (error) {
                if (error !== null) {
                    console.log(error);
                }
                return console.log('You won!, deposited ' + amount)
            });
        }else{
            fs.appendFile("bank.txt", ", -" + 1, function (error) {
                if (error !== null) {
                    console.log(error);
                }
                return console.log('You lost, sorry. withdrawn ' + amount)
            });
        }
        break;
    
        
}


