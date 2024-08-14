// Write your solution in this file!
var customerName = 'bob'
var bestCustomer; 
const leastFavoriteCustomer = 'peter'
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    console.log(customerName);

    
}

function setBestCustomer (){
   bestCustomer = 'not bob';
}


function overwriteBestCustomer () {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer (customer) {
    leastFavoriteCustomer = 'peter'
    console.log(leastFavoriteCustomer);
}

changeLeastFavoriteCustomer ();



