var url= "data/earth-like-results.json";
var arregloPlanetas = [];
function getJSON(url){
    return new Promise(function(resolve,reject){
        var ajax = new XMLHttpRequest();
        ajax.open("GET",url);
        ajax.send();
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4){
            //console.log(ajax.responseText);
            resolve(JSON.parse(ajax.responseText));
            }
        }
    })
}

getJSON(url).then(function(respuesta){
  // console.log(respuesta.results);

 for(var i = 0; i < respuesta.results.length ; i++){
   arregloPlanetas.push(getJSON(respuesta.results[i]));
   arregloPlanetas[i].then(function(planeta){
     console.log(planeta);
     obtenerDatos(planeta);
   });
  }
  // return arregloPlanetas;
});


var obtenerDatos = function(planeta){
    var nombre =planeta.pl_name;
    var teles=planeta.pl_telescope;
    var fecha=planeta.pl_disc;
    var masa=planeta.dec;
    crearPlaneta(nombre,teles,masa,fecha);
}



var crearPlaneta = function(nombre,teles,masa,fecha){
    var contenedor = document.getElementById("detallePlanetas");
    var row = document.createElement("div");
    var col_s12 = document.createElement("div");
    var card = document.createElement("div");
    var card_image = document.createElement("div");
    var card_image_imagen = document.createElement("img");
    var card_image_title = document.createElement("span");
    var card_content = document.createElement("div");
    var card_content_parrafo = document.createElement("p");

    row.setAttribute("class","row");
    col_s12.setAttribute("class","col s12 m6");
    card.setAttribute("class","card");
    card_image.setAttribute("class","card-image");
    card_title.setAttribute("class","card-title");
    card_content.setAttribute("class","card-content");
    card_image_imagen.setAttribute("src","http://www.dummy.com/300x300");
    
    card_image_title.innerText=nombre;
    contenedor.appendChild(card_image_title);
}



getJSON("data/earth-like-results.json")
//.then(function(mensaje){return(getJSON(mensaje.results[0]))})
//.then(function(resultado){console.log(resultado)})