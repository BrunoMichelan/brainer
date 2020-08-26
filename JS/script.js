/* JS pertencente à brainer.tk */
var v1 = (v1,0);

function searchFunction() {
    var input, filter, ul, lii, liii, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('wrapper');
    lii = ul.getElementsByTagName('lii');
    liii = ul.getElementsByTagName('liii');

    for(i=0 ; i< lii.length; i++){
        a = lii[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            lii[i].style.display = "";
            ($("liii").hide())
            v1= v1 + 1;
            ("#labelV1").textContent= "g";
        }
        
        else{
            lii[i].style.display = 'none';
            $("liii").hide();}
        if(a.innerHTML.toUpperCase().indexOf(filter) > -0.1){
            $("liii").show();}
    }
}

function searchFunction2() {
    var input2, filter, ul, lii, liii, a, i;
    input2 = document.getElementById('myinput2');
    filter = input2.value.toUpperCase();
    ul = document.getElementById('wrapper');
    lii = ul.getElementsByTagName('lii');
    liii = ul.getElementsByTagName('liii');

    for(i=0 ; i< lii.length; i++){
        a = lii[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            lii[i].style.display = "";
            ($("liii").hide())
            v1= v1 + 1;
            ("#labelV1").textContent= "g";
        }

        else{
            lii[i].style.display = 'none';
            $("liii").hide();}
        if(a.innerHTML.toUpperCase().indexOf(filter) > -0.1){
            $("liii").show();}
    }
}

var meuCookie = {};

function validarCookiePesq() {
  
    preencherMeuCookie();
  
    if(meuCookie.Pesquisa != undefined) {
    
        console.log("Pesquisa existe!");
        $("#labelPesqId").text(meuCookie.Pesquisa);
    }
}

$("#noticias0").hide();  
$("#noticiasr1").hide();  
$("#mais2").hide();  
$("#maisop").hide();
$("#sla123").hide();
$("#hgg").hide();
$("#noticiasr1").click(mostrarn0);
$("#noticiasl1").click(mostrarn1);
$("#mais").click(mostrarmais);
$("#mais2").click(mostrarmenos);
$("#msm").click(expand);
$("#msm2").click(retract);

function mostrarn0() {
    $("#noticiasl1").show();  
    $("#noticiasr1").hide();
    $("#noticias").show();  
    $("#noticias0").hide();  
}
function mostrarn1() {
    $("#noticiasl1").hide();  
    $("#noticiasr1").show();
    $("#noticias0").show();  
    $("#noticias").hide();  
}
function mostrarmais() {
    $("#maisop").show();   
    $("#mais2").show();  
    $("#mais").hide();  
}

function mostrarmenos() {
    $("#maisop").hide();   
    $("#mais2").hide();  
    $("#mais").show();  
}

function expand() {
    $("#hgg").show();
    $("#msm").hide();
}

function retract() {
    $("#hgg").hide();
    $("#msm").show();
}

function validarCookieMode() {
    preencherMeuCookie2();
    $("#labelLala").text(meuCookie.mode);
    $("#labelLala").hide(); 
}

function preencherMeuCookie() {
    var camposValores = document.cookie.split("; ");
  
    console.log(camposValores);
  
    for(var i=0; i<camposValores.length; i++) {
    
        var campo = camposValores[i].split("=");
    
        console.log(campo);
    
        meuCookie[campo[0]] = campo[1];
    }
}

function preencherMeuCookie2() {
    var camposValores = document.cookie.split("; ");
  
    console.log(camposValores);
  
    for(var i=0; i<camposValores.length; i++) {
    
        var campo = camposValores[i].split("=");
    
        console.log(campo);
    
        meuCookie[campo[0]] = campo[1];
    }
}

function pesquisar() {  
    var pesquisaValor = $(".inputPesqId").val();
  
    criarCookie("Pesquisa", pesquisaValor, 1);
  
    validarCookiePesq();
}

function pesquisar2() {  
    var pesquisaValor = $(".inputPesqId2").val();
  
    criarCookie("Pesquisa", pesquisaValor, 1);
  
    validarCookiePesq();
}

function pesquisar3() {  
    var pesquisaValor = $(".inputPesqId3").val();
  
    criarCookie("Pesquisa", pesquisaValor, 1);
  
    validarCookiePesq();
}

function criarCookie(campo, valor, dias) {
    var dataExpiracao = new Date();
  
    dataExpiracao.setTime(dataExpiracao.getTime() + (dias * 1 * 1 * 1 * 1 * 1500));
  
    var campoExpiracao = "expires=" + dataExpiracao.toUTCString();
  
    document.cookie = campo + "=" + valor + "; " + campoExpiracao;
    
    console.log(document.cookie);
}

function criarCookie2(campo, valor, dias) {
    var dataExpiracao = new Date();
  
    dataExpiracao.setTime(dataExpiracao.getTime() + (dias * 9999 * 365 * 24 * 60 * 60 * 1000));
  
    var campoExpiracao = "expires=" + dataExpiracao.toUTCString();
  
    document.cookie = campo + "=" + valor + "; " + campoExpiracao;
    
    console.log(document.cookie);
}
  
function gfg_Run() { 
    var label = document.getElementById("labelPesqId");
    var el_down = document.getElementById("GFG_DOWN"); 
    var inputF = document.getElementById("myinput");
    var labelLala = document.getElementById("labelLala");
                  
    inputF.value = label.textContent;
    inputF.hide;
            
    validarCookieMode();
            
    var labelMode = document.getElementById("labelLala").textContent;
    var darkMode = document.getElementById("darkMode");
    var facebook2 = document.getElementById("facebook2");
            
    if (labelMode == "true"){
        document.body.style.backgroundColor = "#b3b3b3";
        facebook2.style.backgroundColor = "#b3b3b3";             
    }else{
        document.body.style.backgroundColor = "#212326";
        facebook2.style.backgroundColor = "#b3b3b3";
    }
}  

$("#pesquisarButtonId").click(pesquisar);
$("#pesquisarButtonId2").click(pesquisar2);
$("#pesquisarButtonId3").click(pesquisar3);

window.onload = function() {
    gfg_Run();
    validarCookiePesq();
    validarCookieMode();
    $("#myinput").hide();
    window.setTimeout(j , 0);
}

function j(){
    console.log("1 milisegundo");
    gfg_Run();
    fff();
    $("#myinput").hide();
    var vr = document.getElementById("labelV1");
    vr.textContent = v1;
}

function myFunction() {
    var checkkkBox = document.getElementById("agostoCheck");
    var checkBox = document.getElementById("maioCheck");
    var checkkBox = document.getElementById("abrilCheck");
    
    if (checkkkBox.checked == true){
        $("#agosto").show();
    } else {
        $("#agosto").hide();
    }
    if (checkBox.checked == true){
        $("#maio").show();
    } else {
        $("#maio").hide();
    }
    if (checkkBox.checked == true){
        $("#abril").show();
    } else {
        $("#abril").hide();
    }
}

function onoff() {
    var darkMode = document.getElementById("darkMode");
    var darkModeonoff = document.querySelector('#darkMode').checked;
    
    if (darkMode.checked == true){
        console.log("ativado");
        criarCookie2("mode", darkModeonoff, 1);
        document.body.style.backgroundColor = "#b3b3b3";
        console.log(darkModeonoff);
    }else {
        console.log("desativado");
        criarCookie2("mode", darkModeonoff, 1);
        document.body.style.backgroundColor = "#212326";
        console.log(darkModeonoff);
    }
}

var countDownDate = new Date("Aug 27, 2020 21:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "🛠 A notícia será postada em breve 🛠";
    }
}, 1000);

function fff(){
    var labelMode = document.getElementById("labelLala").textContent;
    var darkMode = document.getElementById("darkMode");
            
    if (labelMode == "true"){
        var darkModeonoff = document.querySelector('#darkMode').checked = true;            
    }else{
        var darkModeonoff = document.querySelector('#darkMode').checked = false;}   
}