const fruits=['사과','귤','바나나', '포도', '망고'];
console.log(fruits.length);
console.log(fruits[0]);
for(let f=0; f< fruits.length; f++){
    console.log(fruits[f]);
}
const arr=[1,2,5,6,7];
for(let a =0; a<arr.length; a++){
    console.log(arr[a]);
}
const alphabet= ['a','b','c','d'];
for( let alpha of alphabet){
    console.log(`alpha>>>> ${alpha}`);
    
}
//const alphabet1= ['a','b','c','d'];
// alphabet1.forEach(function(alpha) {
    // console.log('element:',alpha);
    
// });
// const alphabet1= ['a','b','c','d'];
// alphabet1.forEach(function(alpha,idx) 
    
        // alphabet1.forEach(function(alpha) {
        // }
            // console.log(element:${alpha}, index: ${idx}`)};
            
const numbers=[1,2,3,4,5];
const doubleNumbers= numbers.map(function(num){
    return num*2;
});
console.log(doubleNumbers);
console.log(numbers);
const pracNumbers= numbers.filter(function(num){
    return num%2===0;

})
console.log(pracNumbers);

console.log(numbers);


const pracNumbers2= numbers.find(function(num){
    return num%2===0;
})
console.log(pracNumbers2);






