let str= 'Happy Birthday';
let str2='    Happy Birthday   '
console.log('str>>>>', str);
console.log('str2>>>>',str2);
console.log(str[0]);
console.log(str[4]);
console.log(str[0]+str[9]);
console.log(str[0]+str[1]+str[8]+str[11]);
console.log(str.length);
console.log(str2.length);

console.log(str.toUpperCase());
console.log(str2.toLowerCase());

console.log(str2.trim());
console.log(str2.trim().length);
console.log('---------------');
console.log(str.indexOf('y'));

console.log(str.indexOf('i'));
console.log(str.indexOf(' '));
console.log(str.indexOf('v'));
console.log(str.indexOf());
console.log(str.slice(10));
console.log(str.slice(1, 5));
console.log(str.slice(-6));
console.log('---------------');
console.log('str>>>>', str);
console.log('str2>>>>',str2);
console.log(str.replace('p', 'w'));
console.log(str.replace('B', 'w'));
console.log(str.replaceAll('p', 'w'));
let str3 ='dinner'
console.log(str3.split('e'));
console.log(str3.split('n'));
console.log(str3.repeat(4));
console.log('------------------');

let arr =[1,2,3,4,5,];
let arr2=['dog','panda', 'tiger', 'monkey'];
console.log('arr>>>>>>>', arr);
arr[5]=6;
console.log(arr);
arr[8]=100;
console.log(arr);
arr.push(6);
arr.push(10)
console.log(arr);
arr.pop()
console.log(arr);
arr2.unshift('cat')
console.log(arr2);
arr2.shift()
console.log(arr2);
console.log(arr.legnth);
console.log(arr2.includes('panda'));
console.log(arr2.includes('lion'));
//console.log(arr.reverse());
console.log(arr2);
console.log(arr2.join(''));
console.log(arr2.join(' '));
console.log(arr2.join('-'));
console.log('hello'.split(''));

console.log('hello'.split('').reverse());

console.log('hello'.split('').reverse().join(''));


















