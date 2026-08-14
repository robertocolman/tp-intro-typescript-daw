# Trabajo Práctico: Introducción a TypeScript

**Cátedra:** Desarrollo de Aplicaciones Web (2026)  
**Carrera:** Tecnicatura Universitaria en Desarrollo Web (TUDW)  
**Institución:** Facultad de Ciencias de la Administración — Universidad Nacional de Entre Ríos (UNER)  

---

## 👥 Integrantes del Grupo y Distribución de Tareas

| Integrante | Consignas Asignadas | Temas Abordados |
| :--- | :---: | :--- |
| **Roberto Colman** | Consignas 1 y 2 | Definición de interfaz `Animal` e implementación de clases (`Perro`, `Gato`, `Vaca`). |
| **Esteban Chavez** | Consignas 3 y 4 | Función polimórfica `describirAnimal` e instanciación tipada de animales. |
| **Nahuel Valenzuela** | Consignas 5 y 6 | Ejecución de `describirAnimal` y declaración del Enum `DiasSemana`. |
| **Martina Ascona** | Consignas 7 y 8 | Tipos de unión (`string | number`) e interfaz genérica `Fila<T>`. |
| **Lucia Allassia** | Consignas 9 y 10 | Instanciación de filas genéricas tipadas, inserción y remoción de elementos. |

---

## 📌 Descripción del Trabajo Práctico

El objetivo principal de este trabajo práctico es aplicar y afianzar los conceptos fundamentales del lenguaje **TypeScript**, enfocándose en el sistema de tipos estático, programación orientada a objetos (POO), tipos avanzados y genéricos.

### 📋 Resumen de Consignas

1. **Interfaz `Animal`:** Definición de contrato con atributo `nombre: string` y método `gritar(): string`.
2. **Clases de Animales:** Implementación de las clases `Perro`, `Gato` y `Vaca` satisfaciendo la interfaz `Animal`.
3. **Función `describirAnimal`:** Función que recibe un parámetro tipado `Animal` y muestra por consola su nombre y onomatopeya.
4. **Instanciación tipada:** Creación de constantes `perro`, `gato` y `vaca` con tipado explícito.
5. **Ejecución polimórfica:** Llamada a `describirAnimal` para cada una de las instancias creadas.
6. **Enumeraciones (Enum):** Creación del Enum `DiasSemana` con los días de la semana.
7. **Tipos de Unión (Union Types):** Variable con tipo `string | number`, asignando `"Messi"` y reasignando luego el valor `10`.
8. **Genéricos (Generics):** Creación de una clase genérica que implemente la interfaz `Fila<T>` con operaciones `agregar(elemento: T)` y `remover(): T | undefined`.
9. **Filas Tipadas:** Instanciación de colas/filas específicas para `number`, `string` y `Animal`.
10. **Manipulación de Filas:** Inserción de 3 elementos en cada una de las filas y remoción de un elemento en cada una para demostrar su correcto funcionamiento.

---

## 🚀 Ejecución y Compilación

Para compilar y ejecutar el archivo TypeScript:

```bash
# Compilar a JavaScript
tsc index.ts

# Ejecutar el archivo compilado
node index.js