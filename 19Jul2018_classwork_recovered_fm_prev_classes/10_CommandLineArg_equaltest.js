let argOne = process.argv[2];
let argTwo = process.argv[3];

if (argOne === argTwo){
    console.log("values are equal?"+true);
}else{
    console.log("values are equal?"+false);
};

if (parseInt(argOne,10)%7===0 && parseInt(argTwo,10)%7===0){
    console.log("divisible by 7 though")
}else{
    console.log("divisible by 7?"+false);
}
