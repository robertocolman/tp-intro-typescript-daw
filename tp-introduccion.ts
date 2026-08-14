
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

let jugador: string | number;
jugador = "Messi";
jugador = 10;



// 8) Martina | interfaz genérica `Fila<T>`

interface Fila<T> {
    agregar(elemento: T): void;
    remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}

// 9) Lucia | Instanciación de filas genéricas tipadas
// 10) Lucia | inserción yremoción de elementos.