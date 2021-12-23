let hunger=100; 
let happiness=20; 
let energy=100;

function feed(){
    if(hunger>0){
        hunger=hunger-20; 
    }
    if(happiness<100){
        happiness=happiness+10;
    }
    displayInfo(); 
}

function pet(){
    if(happiness<100){
        happiness=happiness+20;
    }
    displayInfo(); 
}

function play(){
    if(energy>0){
        energy=energy-10; 
    }
    if(happiness<100){
        happiness=happiness+20;
    }
    displayInfo(); 
}


function displayInfo(){
    document.getElementById("hungerPoints").innerHTML=hunger; 
    document.getElementById("happinessPoints").innerHTML=happiness;
    document.getElementById("energyPoints").innerHTML=energy;
}
displayInfo(); 