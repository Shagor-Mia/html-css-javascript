document.write("hello arrays");

document.write('<br>');

/*var ArrayS = new Array(5);
for(var g=0;g<5;g++){
   ArrayS[g]=prompt('Enter the value : ');
//    document.write(ArrayS[g]+'  ');
}
document.write('<ul>');
for(var a=0;a<5;a++){
    document.write('<li>'+ArrayS[a]+"<br></li>")
}
document.write('</ul>');
*/

// 35.MULTIDIMENSIONAL Array
/*
var arr = [
    ["Shagor ",18557," male "," CSE"],
    ["Shakib ",18556," male "," CSE"],
    ["Rakib ",18555," male "," CSE"],
    ["Najnin ",18554," female "," BUSINESS"],
    ["Nuha ",18521," female "," FINANCE"]


]
// document.write(arr[3][2]+"<br>")
document.write("<table border='1px' cellspacing='0' >")
for(var a =0;a<arr.length;a++)
   {
    document.write("<tr>")
    for(var b=0;b<arr[a].length;b++)
    {
    document.write("<td>")
     document.write(arr[a][b]+"   ");
    document.write("</td>")
    }
    // document.write(a+") "+arr[a]+" <br>");
    //  document.write(" <br>");
    document.write("</tr>")
    
   }
   document.write("</table>");
*/

//CONCAT & JOIN
/*
 let a = ['shagor','topu','Oppu']
 let b = ["Tonni",'Anika']
 let d = ["Tonmoy",'Anik']
 let c = a.concat(b,d)
 document.write(c+"<br><br>");
 let e = c.join(" /<br>");
 document.write(e+"<br><br>");
*/

//ARRAY methods...
/*
let a = ['shagor','topu','Oppu']
 let b = ["Tonni",'Anika']
 let d = ["Tonmoy",'Anik']
 let c = a.concat(b,d)
 document.write(c+"<br><br>");

//  var e = c.slice(1,5);
//   var e = c.slice(-3);
  let e = c.splice(0,2);
 document.write(e+"<br><br>");
 let f = Array.isArray(a);
 document.write(f);
 document.write("<br><br>");
var j = a.indexOf('Oppu',0);
var k = b.lastIndexOf('Tonni',-1);

document.write(j);
document.write("<br><br>");
document.write(k);
document.write("<br><br>");
var h= a.includes('shagor')
document.write(h);
document.write("<br><br>");

var ary =[12,23,24,34,45];
document.write(ary);
document.write("<br><br>");
// var s =ary.some(adultage)
var s =ary.every(adultage)
document.write(s);
document.write("<br><br>");

function adultage(age){
    return age>=18;
}

//.................
ages =[12,23,11,34,33,45];
document.write(ages);
document.write("<br><br>");
// var s =ages.find(adultage)
var s =ages.findIndex(adultage)
document.write(s);

function adultage(age){
    return age>=18;
}
*/
ages =[12,23,11,34,33,45];
document.write(ages);
document.write("<br><br>");
// var s =ages.find(adultage)
var s =ages.filter(adultage)
document.write(s);

function adultage(age){
    return age>=18;
}