'use strict';

// FIRST_ATTEMPT:

var first_number;
var sign;
var second_number;
var result;
first_number = prompt('First Number please?');
sign = prompt('Sign please');
second_number = prompt('Second number please');
if(isNaN(first_number) || isNaN(second_number)){
  alert('it was not number');
} else if (
result = (sign == '+') ? +first_number + +second_number:
  (sign == '-') ? +first_number - +second_number:
  (sign == '*') ? +first_number * +second_number:
  (sign == '/') ? +first_number / +second_number:
  'You are entered a wrong sign')
alert(first_number + sign + second_number + " = " + result);




// SECOND_ATTEMPT:

// var first_number;
// var sign;
// var second_number;
// var sum;
// first_number = prompt('first number please');
// sign = prompt('sign please');
// second_number = prompt('second number please');
// if (isNaN(first_number) || isNaN(second_number)){
//   alert('it was not number');
// } else if(sign == '+'){
//   sum = +first_number + +second_number;
// }else if (sign == '-'){
//   sum = +first_number - +second_number;
// }else if (sign == '*'){
//   sum = +first_number * +second_number;
// }else if (sign == '/'){
//   sum = +first_number / +second_number;
// };
// alert(first_number + sign + second_number + '=' + sum);



// THIRD_ATTEMPT

// var first_number;
// var sign;
// var second_number;
// var sum;
//
// first_number = prompt('first number please');
// sign = prompt('sign please');
// second_number = prompt('second number please');
//
// switch(true){
//   case (sign == '*'):
//     sum = +first_number * +second_number;
//     alert(first_number + '*' + second_number + '=' + sum);
//     break;
//   case (sign == '/'):
//     sum = +first_number / +second_number;
//     alert(first_number + '/' + second_number + '=' + sum);
//     break;
//   case (sign == '+'):
//     sum = +first_number + +second_number;
//     alert(first_number + '+' + second_number + '=' + sum);
//     break;
//   case (sign == '-'):
//     sum = +first_number - +second_number;
//     alert(first_number + '-' + second_number + '=' + sum);
//     break;
//
//   default:
//   alert('it was not number')
// }
