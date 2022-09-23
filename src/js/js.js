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

    // Typebot
    var typebotCommands = Typebot.initBubble({
        url: "https://viewer.typebot.io/ica015",
        proactiveMessage: {
        avatarUrl: "https://avatars.githubusercontent.com/u/37461891?v=4",
        textContent: "Precisa de ajuda?",
        delay: 1000,
        },
        button: {
        //   iconUrl: "https://www.creativefabrica.com/wp-content/uploads/2019/04/Chat-icon-by-ahlangraphic-24.jpg",
        color: "#888",
        },
    });

}

window.onscroll = () =>{
    if (window.scrollY > 100){
        document.getElementById("ativa_menu").style.display = "none";
    }
    else{
        document.getElementById("ativa_menu").style.display = "block";
    }
}

