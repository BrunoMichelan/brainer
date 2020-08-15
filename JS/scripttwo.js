/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
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
  
  // Se tiver o cookie nome
  if(meuCookie.Pesquisa != undefined) {
    
    // Mostrar um label com o nome
    console.log("Pesquisa existe!");
    $("#labelPesqId").text(meuCookie.Pesquisa);
    //window.location.href = "https://brainer.glitch.me/pesquisa.html";
   // $("#labelSobrenomeId").text(meuCookie.sobrenome);
    
  }
  
}

function validarCookieMode() {
  
    preencherMeuCookie2();
    $("#labelLala").text(meuCookie.mode);
    $("#labelLala").hide();
    
  }

function preencherMeuCookie() {
   //meuCookie.nome = "Regis";
  var camposValores = document.cookie.split("; ");
  
  console.log(camposValores);
  
  for(var i=0; i<camposValores.length; i++) {
    
    var campo = camposValores[i].split("=");
    
    console.log(campo);
    
    meuCookie[campo[0]] = campo[1];
  }
}
function preencherMeuCookie2() {
   //meuCookie.nome = "Regis";
  var camposValores = document.cookie.split("; ");
  
  console.log(camposValores);
  
  for(var i=0; i<camposValores.length; i++) {
    
    var campo = camposValores[i].split("=");
    
    console.log(campo);
    
    meuCookie[campo[0]] = campo[1];
  }
}

function k(){
    window.location.href = "https://brainer.glitch.me/pesquisa.html";
    console.log("eae");
}

function pesquisar() {  
  var pesquisaValor = $(".inputPesqId").val();
  
    criarCookie("Pesquisa", pesquisaValor, 1);
  
    validarCookiePesq();
}

function criarCookie(campo, valor, dias) {
  
  var dataExpiracao = new Date(); // Data de agora
  
  dataExpiracao.setTime(dataExpiracao.getTime() + (dias * 1 * 1 * 1 * 1 * 1500));
  
  var campoExpiracao = "expires=" + dataExpiracao.toUTCString();
  
  document.cookie = campo + "=" + valor + "; " + campoExpiracao;
    
  console.log(document.cookie);
}

function criarCookie2(campo, valor, dias) {
  
  var dataExpiracao = new Date(); // Data de agora
  
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
            
            if (labelMode == "true"){
                document.body.style.backgroundColor = "#b3b3b3";
                
            }else{
                document.body.style.backgroundColor = "#212326";
                
            }
        }  

$("#pesquisarButtonId").click(pesquisar);

window.onload = function() {
    gfg_Run();
    validarCookiePesq();
    validarCookieMode();
    $("#myinput").hide();
    window.setTimeout(j , 0);
};

function j(){
    console.log("1 milisegundo");
    gfg_Run();
    searchFunction();
    $("#myinput").hide();
    var vr = document.getElementById("labelV1");
    vr.textContent = v1;
}

function myFunction() {
  // Get the checkbox
  var checkkkBox = document.getElementById("agostoCheck");
  var checkBox = document.getElementById("maioCheck");
  var checkkBox = document.getElementById("abrilCheck");
  // Get the output text

  // If the checkbox is checked, display the output text
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

// Set the date we're counting down to
var countDownDate = new Date("Aug 15, 2020 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "🛠 A notícia será postada em breve 🛠";
  }
}, 1000);