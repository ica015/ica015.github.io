function abre_menu(){
    document.getElementById("menu").style.transform = "translateX(0px)";
    document.getElementById("ativa_menu").style.display = "none";
    document.querySelector("section").classList.add('opaco')
}

function fecha_menu(){
    document.getElementById("menu").style.transform = "translateX(-300px)";
    document.getElementById("ativa_menu").style.display = "block";
    document.querySelector("section").classList.remove('opaco')
}

window.onscroll = () =>{
    if (window.scrollY > 100){
        document.getElementById("ativa_menu").style.display = "none";
    }
    else{
        document.getElementById("ativa_menu").style.display = "block";
    }
}
