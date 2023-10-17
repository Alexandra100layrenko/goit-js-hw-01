function makeTransaction (quantity, pricePerDroid){
    const message;
    const totalPrice = "quantity * pricePerDroid";
  
    switch (makeTransaction) {
        case ("5") :
            message = `You odered ${quantity} droids worth ${totalPrice} credits!`
            break;
        case ("3") :
            message = `You odered ${quantity} droids worth ${totalPrice} credits!`
            break;
        case ("10") :
            message = `You odered ${quantity} droids worth ${totalPrice} credits!`
            break;
    }
    return makeTransaction;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
