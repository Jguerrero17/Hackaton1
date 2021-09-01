//Ejercicios de Hackaton

//Ejercicio #1
// Trabajando con variables 
        //Declare dos variables: admin and name. 
        //Asignar el valor "John" to name. 
        //Copie el valor de name to admin. 
        //Muestre el valor de admin usando alert (debe salir “John”).

        let name = "John";
        let admin = name;
        alert(admin);

//Ejercicio #2
// Dar el nombre correcto 
//Crea una variable con el nombre de nuestro planeta. ¿Cómo nombraría una variable así? 

        let nuestroPlaneta = "Tierra";

//Cree una variable para almacenar el nombre de un visitante actual de un sitio web. ¿Cómo nombrarías esa variable?

        let visitanteActual = "Jhasser";

    
//Ejercicio #3

//¿Const mayúscula?
//Examine el siguiente código:
//  const birthday = '18.04.1982';
//  const age = someCode(birthday);
//  Aquí tenemos una constante birthday date y age se calcula a partir de birthday con la ayuda de algún código (no se proporciona por brevedad y porque los detalles no importan aquí).
// ¿Sería correcto usar mayúsculas para birthday? para age? ¿O incluso para ambos?
// const BIRTHDAY = '18.04.1982'; // make uppercase?const AGE = someCode(BIRTHDAY); // make uppercase?

         Creo que no sería correcto hacer el uso de las masyúsculas porque por lo general se usan una sola mayúscula al comienzo de una palabra en una variable o para diferenciar una palabra de la otra en alguna variable
         Pero igual no hay impedimento para hacerlo, en este caso veo que BIRTHDAY es una fecha constante que nunca cambia y creo que para diferenciarla de las demás variables sí podría ir en masyúsculas 
         a diferencia de age que su valor se basa en un cálculo a partir de BIRTHDAY así que esa variable sí la mantendría en minúscula



// Ejercicio #4   

//Cadenas
    //¿Cuál es el resultado del script?
    let name = "Ilya";
    alert( `hello ${1}` ); // hello 1 ?
    alert( `hello ${"name"}` ); // hello name ?
    alert( `hello ${name}` ); // hello Ilya ?


// Ejercicio #5
    //Hola, objeto
    //Escribe el código, una línea para cada acción:
        //1. Crea un objeto vacío user.
        //2. Añade la propiedad name con el valor John.
        //3. Añade la propiedad surname con el valor Smith.
        //4. Cambiar el valor del name por Pete.
        //5. Quitar la propiedad name del objeto.

        let user = {};
        user.name = "John";
        user.surname = "Smith";
        user.name = "Pete";
        delete user.name;

// Ejercicio #6
       //Compruebe si está vacío
        //Escribe la función isEmpty(obj) que regresa true si el objeto no tiene propiedades, false de lo contrario.
        //Debería funcionar así:
        //let schedule = {};
        //alert( isEmpty(schedule) ); // true
        //schedule["8:30"] = "get up";
        //alert( isEmpty(schedule) ); // false

        function isEmpty(obj) {
            for (let key in obj) {
              return false;
            }
            return true;
          }

// Ejercicio #7

    //Propiedades de objeto de suma

    //Tenemos un objeto que almacena los sueldos de nuestro equipo:
    //let salaries = {
    //John: 100,
    //Ann: 160,
    //Pete: 130
    //}

    //Escriba el código para sumar todos los salarios y guárdelo en la suma variable. Debería ser 390 en el ejemplo anterior.
    
    //Si salaries está vacío, entonces el resultado debe ser 0.

    let suma = 0;
    for (let key in salaries) {
        suma += salaries[key];
      }

    console.log(suma); 


// Ejercicio #8
    //Multiplica los valores numéricos de las propiedades por 2

    //Crea una función multiplyNumeric(obj) que multiplica todos los valores numéricos de propiedad de obj por2.

        //Por ejemplo:
        // before the call
        //let menu = {
        //width: 200,
        //height: 300,
        //title: "My menu"
        //};
        //multiplyNumeric(menu);
        // after the call
        //menu = {
        //width: 400,
        //height: 600,
        //title:
        //"My menu"
        //};
        //Tenga en cuenta que multiplyNumeric no necesita devolver nada. Debería modificar el objeto in situ.
        //PD Usar typeof para buscar un número aquí.

        function multiplyNumeric(obj) {
            for (let key in obj) {
              if (typeof obj[key] == 'number') {
                obj[key] *= 2;
              }
            }
          }


   