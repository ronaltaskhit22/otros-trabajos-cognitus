let number = 23;//numero
let nombre= "santiago";//texto
let decimal = 2.2; //flotante

console.log(number);
console.log("hola soy"+nombre);
console.log(decimal);


let ar =["blue","red","brown" ];


console.log(ar[1]);


//calcuar edad user apartor del año actual y año de nacimientoo
//calcular cuanto hace falta llegar a 100
//nombre
let name = "santiago";
//año nacimiento
let birthyear = 2002;
// año actual
let actualyear = 2026;
//calcular edad
const age = actualyear-birthyear; 
//se imprime con la edad elos años que tengo con el calculo anterior
console.log("hola "+name + " y tengo " + age +" Años ");
//calculo para llegar a 100 añod
//edad objetivo 100
let agecent = 100;
//se resta e valor de agecnt menos edad actual
let falt100 = agecent - age;

//se uimprime con el nombre la edad actul que le hace falta para coumplir los 100
console.log("mi nombre es: " +name + " para cumplir los 100 años me hace falta : " +falt100 + " Años en total"  );

//funcion  calage and cent

function calageandcal100(name2,birthyear2,agecent2 ) {
  let actualyear2 =2026; 
  const age2 = actualyear2 -birthyear2;
  console.log("hola mi nombre es: " +name2+" y tengo en total "+ age2 +" Años");

   let falt1002 = agecent2 -age2 ;
   console.log(" mi nombre es: " +name2 +" y para cumplir los 100 Años "+ falt1002 +" Años en total");

   
}

calageandcal100("MR Roa",1993 ,100);

//RETO 2
//DADO NUMERPS PARESDECIDOR LOS NUMERPD PARES
//DECIR CUANTO NUMOERSO PARES HY EN EN ARRAY ORIGINL
//multiplicar los áres actuals por 2
//array priginal
let NUMBERS1 = [1,2,3,4,5,6,7,8];
//array numeros pare
let numberspar = [];

function ARRYPR() {
//se filtra numeros pares
     numberspar = NUMBERS1.filter(number=> number%2=== 0) ;
     //se insrta numeros pares
    numberspar.push()
    
//e multiplican numeros pares or 2 
 let numbersparx2 =   numberspar.map(number => number *2);
 //se cienta eltotal de los numeros psres originales
let totalnumberspar = numberspar.length
//log numerps pares
 console.log("los numeros pares son: "+ numberspar);

 //log multiplicacion pares
 console.log("los en el resultado de multiplicar los numeros pares es: " +numbersparx2);
 //log total pares
 console.log("el total de numeros pares es: "+totalnumberspar);
 
 
     
        

}


ARRYPR();

//semaforo 

let text = ["Stop","Prepare your selft","GO!","invalid"];


function traficlight(color) {

//se usa el switch para definor lo qe se hara
    switch(color) {
        //si el color es rojo saldrira stop
    case "red" :
    console.log(text[0]);
    break; 
//sei es amarllo prepare your self
    case "yellow" :
    console.log(text[1]);
    
    break;

    //si es verde significa go
    case "green" :
    console.log(text[2]);

    break;
//si mte u color errneo sale invalid
    default:
    console.log(text[3]);
    }

    };
    //se llama la funcion para el semaforo con el color deseado
traficlight("red");