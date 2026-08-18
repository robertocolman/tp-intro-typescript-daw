
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

const filaNumeros: FilaGenerica<number> = new FilaGenerica<number>();
const filaStrings: FilaGenerica<string> = new FilaGenerica<string>();
const filaAnimales: FilaGenerica<Animal> = new FilaGenerica<Animal>();

// 10) Lucia | inserción y remoción de elementos.

filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);

filaNumeros.agregar(10);
filaNumeros.agregar(20);
filaNumeros.agregar(30);

filaStrings.agregar("Torta");
filaStrings.agregar("Bizcochos");
filaStrings.agregar("Facturas");

filaAnimales.remover();
filaNumeros.remover();
filaStrings.remover();