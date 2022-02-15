//Purchase clay
const buyClay = () => {
    return {};
}


//Throw bowl
const makePottery = (obj) => {
    obj.shape = 'Bowl';
    return obj;
}


//Bisque firing
const bisqueFire = (obj) => {
    obj.readyForGlazing = true;
    return obj;
}


//Glaze the bowl
const glazePottery = (obj) => {
    if (obj.readyForGlazing) {
        obj.glazing = 'Midnight Blue';
    } else {
        console.log('Make sure you bisque fire the pottery before you glaze it.');
    }
    return obj;
}


//Fire the bowl
const finalFiring = (obj, kilnTemp) => {
    if (kilnTemp > 1200){
        obj.cracked = true;
    } else {
        obj.cracked = false;
    }
    return obj;
}


//Run
let t1 = Date.now();
let x = buyClay();
x = makePottery(x);
x = bisqueFire(x);
x = glazePottery(x);
x = finalFiring(x, 1200);
console.log(x);
//console.log(`x section ran in ${Date.now() - t1} milliseconds`)

//Nested function calls
let t2 = Date.now();
let y = finalFiring(
        glazePottery(
            bisqueFire(
                makePottery(
                    buyClay()
                )
            )
        ),
    1201); //Kiln temperature argument to finalFiring function
console.log(y);
//console.log(`y section ran in ${Date.now() - t2} milliseconds`)