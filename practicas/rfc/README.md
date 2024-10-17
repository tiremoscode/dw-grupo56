## Aplicación para generar el RFC.

1. Sincronizar desde la rama main y crear una nueva rama con tu nomrbe acompañado del ejercicio.
   Ejemplo: feature/sandra-rfc
2. Tomar como referencia lo que hicimo en el ejercicio número 4 y crear una carpeta dentro de la carpeta rfc
   con tu nombre. Ejemplo: rfc-sandra
3. Crear el archivo con tu nombre. Ejemplo rfcsandra.js
4. Crear una aplicación que solicite al Usuario desde la terminal los siguientes datos:
   a) Nombre(s)
   b) Apellido Paterno
   c) Apellido Materno
   d) Dia de Nacimiento (2 digitos)
   e) Mes de Nacimiento (2 digitos)
   f) Año de Nacimiento (2 digitos)
5. Utilizando las siguientes reglas, crearemos el RFC del Usuario.
   Ejemplo: SANDRA LETICIA LÓPEZ SARMIENTO.
   Fecha de nacimiento: 03/06/98.
   RFC: LOSS980603XXX
   a) Se toman las primeras 2 letras del Apellido Paterno.
   b) Se toma la primer letra del Apellido Materno.
   c) Se toma la primer letra del Nombre.
   d) Concatenamos ambos valores y añadimos los digitos del año, mes y día
   e) Por último, añadimos la homoclave con un valor fijo XXX.
