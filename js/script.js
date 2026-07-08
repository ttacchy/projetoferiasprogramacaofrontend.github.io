let escuro = false;

function tema(){

    escuro = !escuro;

    document.getElementById("body").classList.toggle("dark");

    let botao = document.querySelector("button.btn-light");

    if(escuro){

        botao.innerHTML="☀️";

    }else{

        botao.innerHTML="🌙";

    }

}
