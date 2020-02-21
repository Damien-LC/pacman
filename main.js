document.addEventListener("DOMContentLoaded", function () {
    //debut de mon code JS
    function pacman() {
        let pac = document.getElementById("pacman");
        let posX;
        let posY;
        let audio = new Audio('0477.wav');
        console.log(posX);
        console.log(posY);
        document.addEventListener("keydown", function (event) {
            let posX = pac.offsetLeft;
            let posY = pac.offsetTop;
            console.log(event.keyCode);
            switch (event.keyCode) {
                case 39:
                    console.log("droite");
                    if (posX >= 1120) {
                        console.log("out");
                        audio.play();
                    } else {
                        posX += 20;
                        //posX = posX + 20 
                        pac.style.left = posX + "px";
                    }
                    break;
                case 37:
                    console.log("gauche");
                    if (posX === 0) {
                        console.log("out");
                        audio.play();
                    } else {
                        posX += -20;
                        //posX = posX + 20 
                        pac.style.left = posX + "px";
                    }
                    break;
                case 38:
                    console.log("haut");
                    if (posY == 0) {
                        console.log("out");
                        audio.play();
                    } else {
                        posY += -20;
                        //posY = posY + 20 
                        pac.style.top = posY + "px";
                    }
                    break;
                case 40:
                    console.log("bas");
                    if (posY >= 520) {
                        console.log("out");
                        audio.play();
                    } else {
                        posY += 20;
                        //posY = posY + 20 
                        pac.style.top = posY + "px";
                    }
                    break;
                default:
                    break;
            }
            console.log(event);
        })
    }
    pacman();

    //Fin de mon code JS
});