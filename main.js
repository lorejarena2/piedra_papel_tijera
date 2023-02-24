const pi=document.getElementById('piedra');
const pa=document.getElementById('papel');
const ra=document.getElementById('tijera');
var hum= document.getElementById('resultado_h');
var mac=document.getElementById('resultado_m');

pi.disabled=true;
pa.disabled=true;
ra.disabled=true;

// let cantidad=prompt('Cuantas veces desea jugar')

// // 0 Piedra
// // 1 Papel
// // 2 Tijera 

 let contador_machine=0;
 let contador_humano=0;
 let humano=0;
 var machine=0;
 let valid=0;
  let cantidad=0

 function funcionar(){
  
  console.log(humano)
  console.log(machine)
  if(humano==0 && machine==0){
  console.log('No pasa nada')
  }else if(humano==0 && machine==1){
    contador_machine=contador_machine+1;
    mac.textContent=contador_machine;
    console.log('Puntos Machine '+contador_machine)
  }else if(humano==0 && machine==2){
    contador_humano=contador_humano+1
     hum.textContent=contador_humano;
  console.log('Puntos Humano '+contador_humano)
  }else if(humano==1 && machine==0){
    contador_humano=contador_humano+1
    hum.textContent=contador_humano;
    console.log('Puntos Humano '+contador_humano)
  }else if(humano==1 && machine==1){
    console.log('No pasa nada')
  }else if(humano==1 && machine==2){
    contador_machine=contador_machine+1;
    mac.textContent=contador_machine;
    console.log('Puntos Machine '+contador_machine)
  } else if(humano==2 && machine==0){
    contador_machine=contador_machine+1;
    mac.textContent=contador_machine;
    console.log('Puntos Machine '+contador_machine)
  } else if(humano==2 && machine==1){
    contador_humano=contador_humano+1
    hum.textContent=contador_humano;
    console.log('Puntos Humano '+contador_humano)
  } else if(humano==2 && machine==2){
    console.log('No pasa nada')
  }
}

function repeticion(){
  valid=valid+1
  console.log(valid)
 }

 function validar(){
  console.log(cantidad,valid)
  if(cantidad==valid){
    pi.disabled=true;
    pa.disabled=true;
    ra.disabled=true;
    contador_humano=0;
    contador_machine=0;
    valid=0;
    console.log(contador_humano,contador_machine,valid)

  }
 }

 function generar(){
  machine=Math.round(Math.random()*2);
 }

 function piedra(){
  humano=0
  generar()
  funcionar()
  repeticion()
  validar()
 }

 function papel(){
   humano=1
   generar()
   funcionar()
   repeticion()
  validar()
 }

 function tijera(){
   humano=2
   generar()
   funcionar()
   repeticion()
  validar()
 }

 function jugar(){
  cantidad=prompt('Cuantas veces desea jugar')
  console.log(cantidad)
  pi.disabled=false;
  pa.disabled=false;
  ra.disabled=false;
  hum.textContent=0;
  mac.textContent=0;
 }

