let amina = {
    age : 28,
    like : 'watching movie',
    isMArried : false,
    boyfriend : "no"

}
console.log(amina);

var huslen = {
    nickname:'husi',
    age: 27,
    hobby: 'playing morin huur',
    durtai: function morinhuur() {
        return 'durtai';
    }
}
console.log(huslen);


let a={
    name: '이몽룡',
    age:18,
    like: ['강아지', '고양이'],
    isMarried: true,
    girlfriend: {
        name: '성춘향',
        age: 16,
    }
 }
console.log(a);

let mathScore = 77;
let engScore = 88;

let avgScore= ((mathScore+engScore)/2);
console.log('average score is '+ avgScore);

function multifly (a, b){
    return a*b;
}
console.log(multifly(3,7));
console.log(multifly(2,2));

const square = function(a) {
    return (a**2);
}
console.log(square(4));
console.log(square(11));
console.log(square(5));

const sqr = (a)=> {
    console.log(a**2)
}
sqr(4);
sqr(11);
sqr(5);

//let age= prompt('ta heden nastai be');
//if( age>20){
  //  console.log("nasand hursen hun baina");
//}   else if( age >17){
  //  console.log('ahlah angiin suragch baina');
//}   else if ( age >14){
 //   console.log('dund angiin surgach baina');
//}   else if (age >8){
 //   console.log('baga angin usragch baina');
//} 
    //else {
  //  console.log('balchir huuhed baina');
//}

let now = new Date (). getHours();
let tsag = 11;
if (now === tsag){
    console.log('udees umnu')
} else{
    console.log("udees hoish");

}

let b=0;
for ( let a=0; a<=100; a++){
  
    if( a % 2 == 0 || a % 5 == 0){
        b += a
    }
}
console.log(b);



for(niit=0; niit<=10000; niit++)
    if( niit % 13 === 0 && niit % 2===1){  
    console.log(niit);};


//const too= prompt('durtai toogoo oruulna uu');
//for (let num=1; num<=too, num++;){
 //   if(num%13===0 && num%2===1){
//
//        console.log(num)
//    }
//}


let i= 1;
let c= 1;
for ( i < 10) {
    for (c <10;) {

    }
}
function changeImg() {
    $('.apple').changeImg ('img', src=Image/image/apple.jpeg)
}