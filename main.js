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