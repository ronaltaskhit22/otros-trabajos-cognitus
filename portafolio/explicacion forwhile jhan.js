"hola"
"ani lava la tina"
//ciclos ago qie se repite
//for 

function examplefor() {
for( let inicio = 920; inicio<=1020; inicio++) {
console.log(inicio);

} 
}
examplefor();



//for 10 a 1 

for(let i = 10; i >=0; i--) {
    console.log(i);
    
}
//while

function hourclock() {
    let hour = 9;
    let min = 20;

 while ((hour + ":" +min) != "10:20") {
   if(min >= 0 && min <=9) {
    console.log(hour + ":0" +min);
   }else {console.log(hour + ":" +min);    
    }
    
   min++;
   if(min== 60) {
     hour++;
     min = 0;
   }
 }

}
hourclock();