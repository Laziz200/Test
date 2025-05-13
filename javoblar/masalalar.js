// Notiondagi masalalar javobi shu yerda bo'ladi

// 1-masala

// const num1=Number(prompt("son 1 kiriting:"));
// const num2=Number(prompt("son 2 ni kiriting:"));
// let result=num1*num2;
// for (let i = num1; i <= result; i+=num1) {
//     console.log(i);
// }
// 2-masala
// let arr=[1,2,3,4,5,6,7,8];
// function myFunc() {
//     let newarr=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]%2==0) {
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// console.log(myFunc(arr));

// 3-masala

// function getSum(...others) {
//     const flat=others.flat();
//     let count=0;
//     for (let i = 0; i < flat.length; i++) {
//         count+=flat[i];
//     }
//     return count
// }
// console.log(getSum(
//     [1,0,0,0,0],
//     [0,1,0,0,0],
//     [0,0,1,0,0],
//     [0,0,0,1,0],
//     [0,0,0,0,1,5]
// ));

// 4-masala

// let arr=[22,55,33,130,11,66,123];
// let a=Math.max(...arr);
// console.log(a);

// 5-masala
// const numbers=[1,3,5,10,15,20,22];
// function filterDivisible() {
//     let newarr=[];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i]%3==0 || numbers[i]%5==0) {
//             newarr.push(numbers[i]);
//         }
//     }
//     return newarr;
// }
// console.log(filterDivisible(numbers));

// 6-masala

// let arr=["salom","nima","gap"];
// function upper() {
//     let newarr=[];
//     for (let i = 0; i < arr.length; i++) {
//         let a=arr[i].toLocaleUpperCase();
//         newarr.push(a);
//     }
//     return newarr;
// }
// console.log(upper(arr));

// 7-masala

// let arr=["nimdur","gap"];
// function sanoq() {
//     let count=0
//     for (let i = 0; i < arr.length; i++) {
//         count+=arr[i].length;
//     }
//     return count;
// }
// console.log(sanoq(arr));

// 8-masala

// let arr=["cat","apple","banana","car"];
// let n=arr.sort((a,b) => a.length-b.length);
// console.log(n);

// 9-masala

// let arr=["pear","grape","melon","kiwi","banana"];
// function mevalar() {
//     let newarr=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length>4) {
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// console.log(mevalar(arr));

// 10-masala

// let arr=["animal","needle","run","swim"];
// function newsoz() {
//     let str="";
//     for (let i = 0; i < arr.length; i++) {
//         let n=arr[i];
//         str+=n[0];
//     }
//     return str;
// }
// console.log(newsoz(arr));