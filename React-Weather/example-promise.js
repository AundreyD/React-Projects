function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && b === typeof 'number'){
      resolve(a + b);
    }else{
      reject('a and b need to be numbers');

    }
  });
}

addPromise(2, 5).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});
addPromise('bool', 'bang').then(function(){
  console.log('this shouldn\'t show');
}, function(err){
  console.log('error', err);
});
