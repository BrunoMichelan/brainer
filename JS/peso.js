$("#peso").click(peso);
$("#peso2").click(peso);
$("#peso3").click(peso);
$("#peso4").click(peso);
var tonelada = document.getElementById("t");
var tonelada2 = document.getElementById("t2");
var tonelada3 = document.getElementById("t3");
var tonelada4 = document.getElementById("t4");
var quilo = document.getElementById("kg");
var quilo2 = document.getElementById("kg2");
var quilo3 = document.getElementById("kg3");
var quilo4 = document.getElementById("kg4");
var grama = document.getElementById("g");
var grama2 = document.getElementById("g2");
var grama3 = document.getElementById("g3");
var grama4 = document.getElementById("g4");
var miligrama = document.getElementById("mg");
var miligrama2 = document.getElementById("mg2");
var miligrama3 = document.getElementById("mg3");
var miligrama4 = document.getElementById("mg4");
var info = document.getElementById("info");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

function peso(){
    if(quilo.selected == true){
        info.style.display = "none";
        info2.style.display = "block";
        info3.style.display = "none";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada3.selected = true;
        tonelada4.selected = true;
        quilo.selected = true;
        quilo2.selected = true;
        quilo3.selected = true;
        quilo4.selected = true;
        grama.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama.selected = true;
        miligrama3.selected = true;
        miligrama4.selected = true;
    }
    if(quilo2.selected == true){
        info.style.display = "none";
        info2.style.display = "block";
        info3.style.display = "none";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada3.selected = true;
        tonelada4.selected = true;
        quilo.selected = true;
        quilo2.selected = true;
        quilo3.selected = true;
        quilo4.selected = true;
        grama.selected = true;
        grama3.selected = true;
        grama4.selected = true;
    }
    if(quilo3.selected == true){
        info.style.display = "none";
        info2.style.display = "block";
        info3.style.display = "none";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada3.selected = true;
        tonelada4.selected = true;
        quilo.selected = true;
        quilo2.selected = true;
        quilo3.selected = true;
        quilo4.selected = true;
        grama.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama.selected = true;
        miligrama3.selected = true;
        miligrama4.selected = true;
    }
    if(quilo4.selected == true){
        info.style.display = "none";
        info2.style.display = "block";
        info3.style.display = "none";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada3.selected = true;
        tonelada4.selected = true;
        quilo.selected = true;
        quilo2.selected = true;
        quilo3.selected = true;
        quilo4.selected = true;
        grama.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama.selected = true;
        miligrama3.selected = true;
        miligrama4.selected = true;
    }
    if(tonelada.selected == true){
        info.style.display = "block";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada3.selected = true;
        tonelada4.selected = true;
        quilo2.selected = true;
        quilo3.selected = true;
        quilo4.selected = true;
        grama2.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama2.selected = true;
        miligrama3.selected = true;
        miligrama4.selected = true;
    }
    if(tonelada2.selected == true){
        info.style.display = "block";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada3.selected = true;
        tonelada4.selected = true;
        quilo2.selected = true;
        quilo3.selected = true;
        quilo4.selected = true;
        grama2.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama2.selected = true;
        miligrama3.selected = true;
        miligrama4.selected = true;
    }
    if(tonelada3.selected == true){
        info.style.display = "block";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada3.selected = true;
        tonelada4.selected = true;
        quilo2.selected = true;
        quilo3.selected = true;
        quilo4.selected = true;
        grama2.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama2.selected = true;
        miligrama3.selected = true;
        miligrama4.selected = true;
    }
    if(tonelada4.selected == true){
        info.style.display = "block";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada3.selected = true;
        tonelada4.selected = true;
        quilo2.selected = true;
        quilo3.selected = true;
        quilo4.selected = true;
        grama2.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama2.selected = true;
        miligrama3.selected = true;
        miligrama4.selected = true;
    }
    if(grama.selected == true){
        info.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "block";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada2.selected = true;
        tonelada4.selected = true;
        quilo.selected = true;
        quilo2.selected = true;
        quilo4.selected = true;
        grama.selected = true;
        grama2.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama.selected = true;
        miligrama2.selected = true;
        miligrama4.selected = true;
    }
    if(grama2.selected == true){
        info.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "block";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada2.selected = true;
        tonelada4.selected = true;
        quilo.selected = true;
        quilo2.selected = true;
        quilo4.selected = true;
        grama.selected = true;
        grama2.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama.selected = true;
        miligrama2.selected = true;
        miligrama4.selected = true;
    }
    if(grama3.selected == true){
        info.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "block";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada2.selected = true;
        tonelada4.selected = true;
        quilo.selected = true;
        quilo2.selected = true;
        quilo4.selected = true;
        grama.selected = true;
        grama2.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama.selected = true;
        miligrama2.selected = true;
        miligrama4.selected = true;
    }
    if(grama4.selected == true){
        info.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "block";
        info4.style.display = "none";
        tonelada.selected = true;
        tonelada2.selected = true;
        tonelada4.selected = true;
        quilo.selected = true;
        quilo2.selected = true;
        quilo4.selected = true;
        grama.selected = true;
        grama2.selected = true;
        grama3.selected = true;
        grama4.selected = true;
        miligrama.selected = true;
        miligrama2.selected = true;
        miligrama4.selected = true;
    }
    if(miligrama.selected == true){
        function peso;
    }
}