/*function loop(a){
document.write("<ul>")
 while(a>=1){
 document.write("<li>")
    document.write('hello javascript ('+a+")<br>");
     a=a-1;
 document.write("</li>")

for(b=a;b<=10;b=b+1){
    document.write("<li>")
        document.write('hello javascript ('+b+")<br>");
    document.write("</li>")
}
document.write("<ul>")
}
loop(1);
*/

/*
function nested_loop(){
    for(var a=1;a<=5;a++){
        for(var b=1;b<=a;b++){
            document.write(b+"  ");
        }
     document.write("<br>"); 
    }  
}
nested_loop();


function nested_again(){
    for(var a=1;a<=5;a++){
        for(var b=1;b<=a;b++){
            document.write(a+"  ");
        }
     document.write("<br>"); 
    }  
}
nested_again();
*/
function nested_again(){
    for(var a=5;a>=1;a=a-1){
        for(var b=1;b<=a;b++){
            document.write(a+"  ");
        }
     document.write("<br>"); 
    }  
}
nested_again();

function nested_loop(){
    for(var a=5;a>=1;a=a-1){
        for(var b=a;b>=1;b=b-1){
            document.write(b+"  ");
         }
     document.write("<br>"); 
    }  
}
nested_loop();
