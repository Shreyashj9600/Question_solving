//Mobile  Validation in JavaScript ?

// mobile 

const num = '0102030401'
if ( num.length == 10 && !isNaN(num)) {
        console.log("Valid mobile number");
} else {
    console.log("mobile number  not valid");
}

const email = 'user@example.com' 
if(email.includes('@') && email.includes('.')){
    console.log('Email is valid');
} else {
    console.log('Email is not valid');
}
