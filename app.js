const arr=[9,1,2,3,4,5];
let num =0;
for(let i=0;i<arr.length;i++){
    if(arr[0]<=0){
        console.log("smallest number");
    }
    if(arr[i]>num){
        num=arr[i];
    }
}console.log(num);


let num1=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<num1){
        num1=arr[i];
    }
}console.log(num1);


let ans=arr.reduce((acc,curr)=>{
return acc += curr;
},0);
console.log(ans);

let avg=arr.reduce((acc,curr)=>{
return (acc+=curr);
},0)/(arr.length+1);
console.log(avg);


const revese= arr.reverse();
console.log(revese);


function check(){
if (arr.length===0){
    console.log('array is empty');
}else{
    console.log('arr is not empty');
}
} check();


let element=2;
let anwer=false;
function checkElement(){
    for(let i=0;i<arr.length;i++){
        if(element===arr[i]){
            anwer=true;
            break;
        }
       
    }
}checkElement();    

if(anwer==true){
console.log(`${element} is presennt in array.`)
}else{
    console.log(`${element} is not presennt in array.`)
}

let arr1=[1,2,2,5,4,7];
let num2=[];
for(let i=0;i<arr1.length;i++){
    if (num2.indexOf(arr1[i]) === -1) {
        num2.push(arr1[i]);
    }
}
console.log(num2);




let arr3=sorting(arr)
function sorting(arr){
    arr.sort(function(a,b){
        return a - b; });
    return arr;}
console.log("accsending",arr3);


let arr4=sorting1(arr)
function sorting1(arr){
    arr.sort(function(a,b){
        return b-a;});
    return arr;}
console.log("desending", arr4);  

console.log(arr3.concat(arr4));

const arr5 = [9, 1, 2, 3, 4, 5];
let val=2;
function findInd(){
  let val1=arr5[val-1];
    console.log(val1);
    return val1;
}findInd();


let arr6=[4,4,5,7,8,8];
let number= checkfreq(arr6);

function checkfreq(arr6){
    let frequency={};
    for(let i=0; i<arr6.length;i++){
        let element=arr6[i];
        if(frequency[element]){
            frequency[element]++;
        }else{
            frequency[element]=1;
        }
    } return frequency;
}

console.log(number);


const list=[0,5,4,8,9,18];
let newList = decending2(list);

function decending2(list){
    list.sort(function (a,b){
        return b - a;
    } );return list;
}
console.log("second largest",newList);
console.log("second largest",newList[1]);
console.log("second smallest",newList[(newList.length)-2]);


const arr8 = [1, 2, 3, 4, 5];
const arr9 = [3, 4, 5, 6, 7];
const same= samesame(arr8,arr9);
function samesame(arr8,arr9){
    let same2=[];
    for(let i=0;i<arr8.length;i++){
        if(arr9.includes(arr8[i])){
            same2.push(arr8[i]);
        }
    } return same2;
}
console.log(same)

const same3= samesame2(arr8,arr9);
function samesame2(arr8,arr9){
    let same2=[];
    for(let i=0;i<arr8.length;i++){
        if(!arr9.includes(arr8[i])){
            same2.push(arr8[i]);
        }
    } return same2;
}
console.log(same3)


let cutNo=2;
let cutArr=chopped(arr8);
function chopped(arr8){
    return arr8.slice(0,cutNo);

}console.log(cutArr);


const line=[1,2,3,4,5,0];
let twist= rotate(line);

function rotate(line){
let new2= [];
for(let i=1;i<line.length;i++){
new2.push(line[i]);
}
new2.push(line[0]);
return new2;
   
}console.log(twist);




let checkacc=checkAcc(line);
function checkAcc(line){

let checkline =line.sort((a,b)=>{
    return b-a;
})
return checkline;
}
console.log(checkacc);


function removeFalsy(arr){
    return arr.filter(Boolean);
}

const array = [0, 1, false, 2, '',true, 3, null, undefined, 4, NaN, 5];
const filteredArray = removeFalsy(array);
// const filteredArray = array.filter(value => value !== true && Boolean(value));
console.log("Filtered array:", filteredArray);  


let newArr=[4,5,8,9];
let evenNo = even(newArr);
function even(newArr){
    let store=[];
for(let i=0;i<newArr.length;i++){
    if(newArr[i]%2===0){
        store.push(newArr[i]);
    }
}
return store;};
console.log(evenNo);

let prod=product(newArr);
function product(newArr){
    return  newArr.reduce((acc,curr)=>{
        return acc=curr*acc;
    },1)
   
}
console.log(prod);




let newArr1=[4,5,8,9];
let diff = diffrence(newArr1);
function diffrence(newArr1){

    if (newArr1.length === 0) {
        return 0; 
    }

let big=0;
let small=Infinity;

    for(let i=0; i<newArr1.length;i++){
if(newArr1[i]>big){
big=newArr1[i];
}
if(newArr1[i] < small){
    small=newArr1[i];
} 

    }
let minus=big-small;
return minus;
}
console.log(diff);



function findLongestString(arr){
    if(arr.length===0){
        console.log("empty str");
    }

let longest=arr[0];

for(let i=1;i<arr.length;i++){
    if(longest.length < arr[i].length){
        longest=arr[i];
    }
}
return longest;
}


const strings = ["apple", "banana", "orange", "kiwi", "strawberry"];
const longestString = findLongestString(strings);
console.log("Longest string:", longestString);


