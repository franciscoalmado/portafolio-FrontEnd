export class Persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    profesion: String;
    aboutMe: String;

    constructor(nombre: String, apellido: String, img: String, profesion: String, aboutMe: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.profesion = profesion;
        this.aboutMe = aboutMe;
    }
}