//Creacion de persona para app de entrega de perros
personaId = 1;
mascotaId = 1;
paseoId = 1;
class Persona{
    constructor (nombre,edad,direccion,mail,rol){
        this.personaId = personaId++;
        this.nombre = nombre;
        this.edad = edad;
        this.coordenadas = direccion;
        this.mail = mail ;
        //Rol: true = Paseador | false = cliente
        this.rol = rol ;
    }

    mostrarNombrePersona(){
        return (this.nombre);
    } 
    ObtenerRolPersona(){
        if(this.rol) {return 'Paseador'} else{return 'Cliente'}
    }
    obtenerCoordenadas(){
        return (this.coordenadas)
    }

}

class Paseador extends Persona{
    paseosAgendados = [];
    constructor(nombre,edad,direccion,mail,dispoDiaria,dispoHoraria,paseos){
        
        super(nombre,edad,direccion,mail,true);
        //Disponibilidad Diaria, marca los dias que puede pasear este paseador 
        this.dispoDiaria = dispoDiaria;
        //Disponibilidad Horaria, marca los turnos que puede pasear este paseador 
        this.dispoHoraria = dispoHoraria;
        for (const p of paseos) {
            p && this.agendarPaseo(new Paseo(p.mascotaId,p.paseadorId,p.diaPaseo,p.horaPaseo,p.direccionPaseo))
        }
    }
    
    obtenerDispoHoraria(){
        return (this.dispoHoraria)
    }
    agendarPaseo(paseo){
        this.paseosAgendados.push(paseo);
    }
    
}



class Cliente extends Persona{
    mascotas = [];
    constructor(nombre,edad,direccion,mail,mascotas){
        super(nombre,edad,direccion,mail,false); 
        for (const m of mascotas) {
            m && this.agregarMascota(new Mascota(m.ownerId,m.nombre,m.edad,m.raza))
        }
    }    
    agregarMascota(mascota){
        this.mascotas.push(mascota)
    }
    
}


class Mascota {
    constructor (ownerId,nombre,edad,raza){
        this.mascotaId = mascotaId++;
        this.ownerId = ownerId;
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    }    
    mostrarNombreMascota(){
        return (this.nombre);
    } 
}

class Paseo{
    constructor (mascotaId,paseadorId,diaPaseo,horaPaseo,direccionPaseo){
        this.paseoId = paseoId++;
        this.mascotaId = mascotaId;
        this.paseadorId = paseadorId;
        this.diaPaseo = diaPaseo;
        this.horaPaseo = horaPaseo;
        this.direccionPaseo = direccionPaseo;
    } 
    /*     
    obtenerTurno(){
        console.log(this.horaPaseo[0]);
        console.log("es un array de obtener turno");
        switch (this.horaPaseo[0]){
            case '1':
            return 'Mañana'
                break;
            case '2':
                return 'Mediodia'
                break;
            case '3':
                return 'Tarde'
                break;
            default:
                break;    
        }
    } */
}