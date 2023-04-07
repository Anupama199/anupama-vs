a=5;               // let/var(assigned)
console.log(a);
console.error('danger');

var a=2;
console.log(a);
const pi=3.14;    //const means constant
console.log(pi);
var c=6
console.log(typeof(c));
var a='anupama';
console.log(typeof(a));
var v=true;
console.log(typeof(v));
var a=['anupama','annie','sangu'];
console.log(typeof(a));
console.log(a.length);
console.log(a[2]);

a.push('pashu');            //push means add a thing
console.log(a);

a.pop();                  // pop means delt a thing     
console.log(a);
let car={
    model: 'i20',
    colour:'white',
    brand: 'hyundai'
}
console.log(car.brand);
let person={
    name: 'anupama',
    age:  '26',
    place:'tvm'

}
console .log(person.name);
var a=2;
console.log(a++);         //post increment will not increase
console.log(++a);         //prefix will increase

//arithmetic operator
let x = 5;
let y = 2;
console.log(x+y);  //arithmetic operator (addition)
console.log(x%y);  //arithmetic operator (remainder)

// comparison operatos      (if, else used)
var p=3;
var q=4;
if (p==q){
    console.log('yes');
}else{
    console.log('no');
}
if (p<=q){
    console.log('yes');
}else{console.log('no')};

//assignment operator
let b = 4;
console.log(b+=3);

//logical operator
var s=1;
var t=2;
if(s==t && s==2){
    console.log('s has a value 2 and is equal to t')
}else{console.log('no')};

//function
function addt(a,b){
    var sum=a+b;
    console.log(sum);
}
addt(2,3);

