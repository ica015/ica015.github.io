window.onload = function(){
    const abre = document.getElementById("ativa_menu");
    abre.addEventListener('click', e =>{
        document.getElementById("menu").style.transform = "translateX(0px)";
        document.getElementById("ativa_menu").style.display = "none";
    })
    const fechar = document.getElementById("fechar-menu");
    fechar.addEventListener('click', e=>{
        if (window.screen.width <= 900){
            document.getElementById("menu").style.transform = "translateX(-300px)";
            if(window.scrollY <=100){
                document.getElementById("ativa_menu").style.display = "block";
            }
        }
    })
}

window.onscroll = () =>{
    if (window.scrollY > 100){
        document.getElementById("ativa_menu").style.display = "none";
    }
    else{
        document.getElementById("ativa_menu").style.display = "block";
    }
}

