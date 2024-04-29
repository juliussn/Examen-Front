const botones = document.getElementsByClassName("grid-item");
const Inicio = document.getElementsByClassName("myButton")

Array.from(botones).forEach(boton => {
    boton.addEventListener("click", function() {
        boton.style.opacity = 0.5;
        setTimeout(() => {
            boton.style.opacity = 1;
        }, 100);
    });
});

