//Funcionalidad del carrusel

 window.addEventListener('load', function() {
     var img = []

     img[0] = "Images/Mk4.jpg"
     img[1] = "Images/Code1.jpg"
     img[2] = "Images/Cibersecurity2.jpg"
     img[3] = "Images/Mustang.jpg"
     img[4] = "Images/Code2.jpeg"
     img[5] = "Images/R34.jpg"
     img[6] = "Images/Cibersecurity1.jpg"

     var n = 0;

     function Carrusel(){
         document.carrusel.src = img[n];

         if(n < 2){
             n++;
         }
         else{
             n = 0;
         }
     }
     setInterval(Carrusel, 3000);
 });

// Funcionalidad del formulario

document.getElementById("enviarForm").onclick = function(){
    x1 = true
    x2 = true
    x3 = true

    const el1 = document.getElementById("nombre").value;
    const el2 = document.getElementById("correo").value;
    const el3 = document.getElementById("mensaje").value;

    document.getElementById("nombre").value !== "" ? el1:x1 = false;
    document.getElementById("correo").value !== "" ? el2:x2 = false;
    document.getElementById("mensaje").value !== "" ? el3:x3 = false;

    x1 === true && x2 === true && x3 === true ? alert(`Nombre: ${el1} \nCorreo: ${el2} \nMensaje: ${el3} \n\nSu solicitud ha sido enviada`): alert("Introduzca los datos correctamente")

    form.reset();
}

// Funcionalidad de las barras

var techName = new Array();
var techLevel = new Array();

techName[0] = "Python";
techName[1] = "Java";
techName[2] = "HTML";
techName[3] = "CSS";
techName[4] = "JavaScript";
techName[5] = "Linux";

techLevel[0] = "65";
techLevel[1] = "50";
techLevel[2] = "50";
techLevel[3] = "40";
techLevel[4] = "30";
techLevel[5] = "60";

var techData = [];

for (var x = 0; x<techName.length; x++){
    techData.push({
        "Lenguaje" : techName[x],
        "Nivel" : techLevel[x]
    });
}

document.getElementById("Python").innerHTML = techName[0];
document.getElementById("Java").innerHTML = techName[1];
document.getElementById("HTML").innerHTML = techName[2];
document.getElementById("CSS").innerHTML = techName[3];
document.getElementById("JavaScript").innerHTML = techName[4];
document.getElementById("Linux").innerHTML = techName[5];

console.log(JSON.stringify(techData));