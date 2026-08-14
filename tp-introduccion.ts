
// 1) Roberto | Definición de interfaz `Animal`

interface Animal {
    nombre: string;
    gritar(): string;
}

// 2) Roberto | implementación de clases (`Perro`, `Gato`, `Vaca`).

class Perro implements Animal {
    nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Guau guau";
    }
}

class Gato implements Animal {
    nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Miau miau";
    }
}

class Vaca implements Animal {
    nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Muuu";
    }
}

// 3) Esteban | Función polimórfica
// 4) Esteban | instanciación tipada de animales.

// 5) Nahuel | Ejecución de `describirAnimal`

describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);

// 6) Nahuel | declaración del Enum `DiasSemana`

enum DiasSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miércoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sábado",
  Domingo = "Domingo"
}


// 7) Martina | Tipos de unión (`string | number`)
// 8) Martina | interfaz genérica `Fila<T>`
// 9) Lucia | Instanciación de filas genéricas tipadas
// 10) Lucia | inserción yremoción de elementos.