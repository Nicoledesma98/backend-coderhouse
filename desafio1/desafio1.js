class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
getFullName(){
    console.log(`un gusto, soy ${this.nombre} ${this.apellido}`)
}
addMascota(param){
    this.mascotas.push(param);
}
countMascota(){
    console.log(`Tengo ${this.mascotas.length} mascotas`)
}
addBook(nombre, autor){
    this.libros.push({nombre : nombre, autor : autor});
    console.log(this.libros);
}
getBookNames(){
    console.log(this.libros.map(libro => libro.nombre));
}
}

const user = new Usuario('Nicolas', 'Ledesma', [], []);
user.getFullName()
user.addMascota('perro');
user.countMascota();
user.addBook('El señor de los anillos', 'J.R.R. Tolkien');
user.getBookNames();
