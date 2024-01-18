// let age =prompt('Enter your age:');
  let age =23;
switch(true){
    case (age>=24 && age<=30):
        document.write('You are selected');
        document.write("<br><br>");
    break;
    case (age>=23 && age<=29):
        document.write('You are not selected');
        document.write("<br><br>");
    break;
    default:
        document.write("Your not eligible for this");
        document.write("<br><br>");

}

function math(x,y,z){
    sum=x+y+z;
    // document.write("the sum is : "+sum);
    return sum;
}
 total = math(67,89,90);
 document.write('The sum is : '+ total);
 document.write("<br>");

 function percentage(per){
 percents = per/300*100;
 return percents;
 }
 avg = percentage(total);
 document.write('The percentage is : '+avg);
 document.write("<br><br>");

 