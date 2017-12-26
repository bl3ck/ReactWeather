// function getTempCallback (location, callback){
//   callback(undefined,78);
//   callback('City nt found');
// }
//
// getTempCallback('',function(err, tmp){
//   if(err){
//     console.log('Error', err);
//   }else{
//     console.log('Success', tmp);
//   }
//
// });
//
//
// function getTempPromise(location){
//   return new Promise(function (resolve,reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Buea').then(function (tmp){
//   console.log('Promise Success', tmp);
// }, function (err){
//   console.log('Promise Error', err);
// })

function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('A & B need to be number');
    }
  });
}

addPromise(2,2).then(function (sum){
  console.log('Sum = ', sum);
}, function(err){
  console.log('Computation error', errs);
})

addPromise('a',2).then(function (sum){
  console.log('this should not show up');
}, function(err){
  console.log('Computation error');
})
