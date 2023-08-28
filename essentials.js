console.log('Hello World');

const fruit=['Apple','Orange','Graps'];

let book={
    'Title':'Compound Effect',
    'Author':'Darren Hardy',
    'Published':'2010',
};

function sayHello(name){
    console.log('Hello, '+name);
}

function dob(){
    const dob= '20th March 1999';
    console.log('Dob: '+dob);
}


function math(a,b){
    console.log('Numbers are:'+a+','+b);
    let sum = a+b;
    let divide=a/b;
    let multiply=a*b;
    let substract=a-b;

    console.log('Addition:'+sum);
    console.log('Substraction:'+substract);
    console.log('Multiplication:'+multiply);
    console.log('Division:'+divide);

}
sayHello('Siddhant sir');
sayHello('Ayush');
math(3,2);
math(5,2);
math(4,5);
dob();
console.log(fruit);
console.log(book);