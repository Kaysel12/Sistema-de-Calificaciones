let inputs = document.querySelectorAll(".input");
let click = document.querySelector("#click");
let limpiar = document.getElementById("limpiar")
let nombreAlumno = document.getElementById("alumno");
let estatus = document.getElementById("estatus");

inputs.forEach(input => {
    input.addEventListener("keyup", (e) => {
        if (e.keyCode < 96 || e.keyCode > 105 && e.keyCode != 8) {
            input.value = "";
            console.log(e.keyCode);
        };
    });
});

let promedio = ()=>{
    let sumaTotal = parseInt(inputs[0].value) + parseInt(inputs[1].value) + parseInt(inputs[2].value) + parseInt(inputs[3].value) + parseInt(inputs[4].value);
    let valorPromediado = parseInt(sumaTotal) / 5;

    if (valorPromediado <= 100) {
        document.getElementById("resultado").textContent = valorPromediado;
    }else{
        alert("Excedio la cantidad normal de puntuacion en un mes. Vuelva a intentarlo")
    };
};

let agregarAlumno = ()=>{
    let valorNombre = nombreAlumno.value
    let valorPromediado = document.getElementById("resultado");
    if (parseInt(valorPromediado.textContent) > 70) {
        let aprobado = `                     
        <li id="nombre">${valorNombre}</li>
        <div class="estatus">Aprobado</div>
        `;
        estatus.innerHTML += aprobado
    }else if (parseInt(valorPromediado.textContent) < 70) {
        let reprobado = `                     
        <li id="nombre">${valorNombre}</li>
        <div class="estatus-r">Reprobado</div>
        `;
        estatus.innerHTML += reprobado
    }
}

click.addEventListener("click", ()=>{
    promedio();
    agregarAlumno();
});

limpiar.addEventListener("click", ()=>{
    inputs.forEach(input => {
        input.value = "";
        nombreAlumno.value = "";
    });
});