//Eercises
const address = {
    street: 'some street',
    city: 'some city',
    zipCode: 'some zipCode'
}

function showAddress(addr){
    for(let key in addr){
        console.log(key, ":", addr[key]);
    }
}
showAddress(address);