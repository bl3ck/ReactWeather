var names = ['James', 'Otto', 'Valery'];

// names.forEach( function (name) {
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name => console.log(name) ));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Bleck'));

// var person = {
//     name: 'Bleck',
//     greet: function (){
//         names.forEach( (name) => {
//             console.log(this.name + ' says hi to ' + name)
//         });
//     }
// };

// person.greet();

//  Challenge Area

function add(a,b){
    return a+b;
}

console.log(add(2,3));
console.log(add(2, 2));


var addStatement = (a, b) => {
    return a + b;
}
console.log(addStatement(6, 7));


var addExpression = (a,b) => a + b;
console.log(addExpression(6,7));