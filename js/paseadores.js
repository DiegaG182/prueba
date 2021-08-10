const paseadores = [];


mostrarFormularioPaseadores = () =>{

    if($('#contenedorFormPaseadores').hasClass("displayNone")){
        $('#contenedorFormPaseadores').show()
    }else{ocultarFormularioPaseadores()}
};    
ocultarFormularioPaseadores = () =>{
    $('#contenedorFormPaseadores').hide()
}
agregarPaseador = () =>{
    let nombre = $("#pnombre").val()
    let edad = $("#pedad").val()
    let direccion = $("#pdireccion").val()
    let mail = $("#pmail").val()
    let dias = document.querySelectorAll('#pdiasDisponibles option:checked');
    let dispoDiaria = Array.from(dias).map(el => el.value);
    let horas = document.querySelectorAll('#phorariosDisponibles option:checked');
    let dispoHoraria =Array.from(horas).map(el => el.value);

    const person = new Paseador (nombre,edad,direccion,mail,dispoDiaria,dispoHoraria); 
    paseadores.push(person);
    dibujarPaseadores(paseadores);
    ocultarFormularioPaseadores();
    guardarLS("listaPaseadores", JSON.stringify(paseadores));

}

crearPaseo = (mascota,paseador,cliente) => {
    let mascotaId = mascota.id;
    let paseadorId = paseador.id;
    let diaPaseo = Array.from(prompt("ingrese el dia que desea pasear a su mascota"));
    let horaPaseo = Array.from(prompt("ingrese el horario que desea pasear a su mascota"));
    let direccionPaseo = cliente.obtenerCoordenadas();
    //console.log(direccionPaseo);
    const paseo = new Paseo (mascotaId,paseadorId,diaPaseo,horaPaseo,direccionPaseo); 
    //agrega el paseo al paseador
    paseador.agendarPaseo(paseo);
    alert(`se agrego el paseo el dia ${paseo.obtenerDia()} en el turno ${paseo.obtenerTurno()} 
           para su  mascota ${mascota.mostrarNombreMascota()} con ${paseador.mostrarNombrePersona()} `);
    return paseo;
}

dibujarPaseadores = (paseadores) =>{
    let miHtml = document.querySelector("#paseadoresContainer");
    miHtml.innerHTML = '';
            
    paseadores.forEach(el => {
        
        miHtml.innerHTML +=
        `
        <div class="box__section">
            <article class="text-center">
            <div class="btn__color">
                <h2>${el.nombre}</h2>
                <h3>${el.ObtenerRolPersona()}</h3>
                <a href="#">Mas Info</a>
            </div>
            </article>
        </div>
        `
        
    });
}



