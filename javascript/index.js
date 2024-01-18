 // 1. WAY to print in javascript
        //  console.log("hello world");
        // alert("me");
        // document.write("document write")

        //2. javascript console API
        // console.log("hello world",3+4,"this is another log");
        // console.warn("this is warning")
        // console.error("this is error")

    //3. VARIABLE IN javascript
       var num1=23;
       var num2=21;
       console.log(num1+num2);

    //4. DATA TYPE IN javascript   
       // Numbers
       var n1=23.13
       var n2=45;

       //string
       var str1='this is string';
       var str2="this is another string"

       //Objects
       var marks={
        opu:134.5,
        topu: 34,anik: 142.4
       }
       console.log(marks);
        
       //Boolean
       var a=true;
       var b=false;
       console.log(a,b)

    //    var und = undefined;
       var und;
       console.log(und);

       var n=null
       console.log(n);

/*
 at high level,there are two data types:
1. Primitive : Undefined,null,number,string,boolean,symbol
2. reference : Arrays & Objects
*/       

// Array

var arr=[3,5,6,8,9]
console.log(arr)
console.log(arr[2])

// +,-.*,/ operator

var q1=12.3
var q2=123
console.log('the number of sum ',q1+q2)
console.log('the number of substr ',q1-q2)
console.log('the number of mul ',q1*q2)
console.log('the number of divis ',q1/q2)

//assignment operator
var c=23
c+=2
q1=c
console.log(q1)

// comparision operator
var x=12
var y=34
console.log(x==y)
console.log(x>y)

// Logical operator
//and
console.log(true&&true)
console.log(true&&false)
console.log(false&&false)
//or
console.log(true||true)
console.log(true||false)
console.log(false||false)
//not
console.log(!false)
console.log(!true)

//function in javascript
function avg(a,b) {
   c=a+b;
   return c;
   
}
w1=avg(2,45)
w2=avg(3,21)
console.log(w1,w2)

// conditional in javascript
//var age=12
//age=23//override the variable
function AGE(age){
   let result;
   if(age==13)
   {
     result= console.log('you are not a kid')
   
   }
   else if(age==18)
   {
     result= console.log('you are a teenege')
      
   }
   else if(age<5)
   {
      result=console.log(' you are in kindergarden')

   }
   else
   {
     result= console.log('you are a kid')
   }
  return result;
}
var a1=AGE(1)
console.log(a1);

// for loop with array
 var arr=[2,4,1,5,6,3]
 for(var i=0;i<arr.length;i++)
 {
   console.log(arr[i])
 }

 //forloop using foreach()
 var A=[9,8,7,4,2,6,1]
  A.forEach(function(element) {
   console.log(element)
   
 });

 //while loop
 let B=[12,23,34,45,56,]
 let j=0;
//  while(j<B.length)
//  {
//    console.log(B[j])
//    j++;
//  }
do
{
   console.log(B[j])
   j++;
}
while(j<B.length)

// break and continue statement
let ar=[11,22,33,44,66]
for(var i=0;i<ar.length;i++)
{
   if(i==1){
      // break
      continue;
   }
  console.log(ar[i])
}
console.log('*********************************************')

// Array methods
let MyArray=['sagor',22,'pani',null,true]
console.log(MyArray.length)
// MyArray.pop()
// console.log(MyArray)
// MyArray.push(345,'aimi')
//console.log(MyArray);
//MyArray.shift()  //remove the first element from the array
// console.log(MyArray);
// const newLen=MyArray.unshift('oppu');
// console.log(newLen)
// console.log(MyArray);
// MyArray.toString()
MyArray.sort()
console.log(MyArray);

// string methods in javascript
let meStr='this is me'
// console.log(meStr.length)
// console.log(meStr.indexOf('m'))
// console.log(meStr.slice(2,6))
s=meStr.replace('me','shagor')
console.log(s)


// Date methods
let mYdates = new Date();
console.log(mYdates)
console.log(mYdates.getTime());
console.log(mYdates.getFullYear());
console.log(mYdates.getDay());
console.log(mYdates.getHours());
console.log(mYdates.getMinutes());

console.log('=======================================');
//DOM manipulation
let elemid=document.getElementById('click')
console.log(elemid)
let elemclass=document.getElementsByClassName('container')
console.log(elemclass);
// elemclass[0].style.background='yellow';
elemclass[0].classList.add('bg-class');
// elemclass[0].classList.add('class-succes');
elemclass[0].classList.remove('class-succes');
console.log(elemid.innerHTML)
console.log(elemid.innerText)

console.log(elemclass[0].innerHTML)
console.log(elemclass[0].innerText)

let tn=document.getElementsByTagName('div')
console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText='this is created para'
//
tn[0].appendChild(createdElement);

createdElement2=document.createElement('b');
createdElement2.innerText='this is created bold'
//
tn[0].replaceChild(createdElement2,createdElement);

// removeChild(element)
// addChild(element)
// deleteChild(element)

// selecting using query
sle=document.querySelector('.container');
console.log(sle);
sle2=document.querySelectorAll('.container');
console.log(sle2);


// Events in javascript
// FirstContainer.addEventListener('click',function(){
//    document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>"
//    console.log('clicked on container');
// })
// FirstContainer.addEventListener('mouseover',function(){
//    console.log('Mouse on container');
// })
// FirstContainer.addEventListener('mouseout',function(){
//    console.log('Mouse out of container');
// })
//  let prehtml =  document.querySelectorAll('.container')[1].innerHTML;

// FirstContainer.addEventListener('mouseup',function(){
//    document.querySelectorAll('.container')[1].innerHTML=prehtml;
//    console.log('Mouse up when clicked on container');
// })
// FirstContainer.addEventListener('mousedown',function(){
//  document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>"
//    console.log('Mouse down when on container');
// })


// arrow function

// function summ(a,b){
//    return a+b ;
// }
summ=(a,b)=>{
   return a+b ;
}
console.log(summ(23,33));


// setTimeout and setInterval
// logkaro=()=>{
//  document.querySelectorAll('.container')[1].innerHTML="<b>set interval fire</b>"
//  console.log('we are log')
// }
// setTimeout(logkaro,2000)
// clr=setInterval(logkaro,2000)
// clearInterval(clr)

// javascript localstorage


// JSON
obj={name:"shgaor",length:1}
jsn=JSON.stringify(obj)
console.log(jsn);
// console.log(typeof jsn);

persed =JSON.parse('{"name":"shgaor","length":1}')
console.log(persed)